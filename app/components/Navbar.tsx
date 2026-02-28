"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation'; // Active link check karne ke liye
import { motion, AnimatePresence } from 'framer-motion';
import { IconButton, Drawer, Divider, List, ListItem, ListItemButton, ListItemText, ListItemIcon, Collapse } from '@mui/material';

// MUI Icons
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import CloseIcon from '@mui/icons-material/Close';
import ShieldIcon from '@mui/icons-material/Shield';
import HomeIcon from '@mui/icons-material/Home';
import BusinessIcon from '@mui/icons-material/Business';
import EngineeringIcon from '@mui/icons-material/Engineering';
import GroupsIcon from '@mui/icons-material/Groups';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import AssignmentIcon from '@mui/icons-material/Assignment';
import WorkIcon from '@mui/icons-material/Work';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

const Navbar: React.FC = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false); // Dropdown state
    const pathname = usePathname(); // Current URL path

    const menuItems = [
        { name: 'Home', href: '/', icon: <HomeIcon /> },
        { name: 'About Us', href: '/about', icon: <BusinessIcon /> },
        { 
            name: 'Our Services', 
            href: '/services', 
            icon: <EngineeringIcon />,
            hasSubmenu: true,
            submenu: [
                { name: 'Security Services', href: '/services/security', icon: <ShieldIcon fontSize="small"/> },
                { name: 'Facility Management', href: '/services/facility', icon: <EngineeringIcon fontSize="small"/> },
                { name: 'Payroll Staffing', href: '/services/payroll', icon: <GroupsIcon fontSize="small"/> },
            ]
        },
        { name: 'Our Clients', href: '/clients', icon: <GroupsIcon /> },
        { name: 'Training Process', href: '/training', icon: <AssignmentIcon /> },
        { name: 'Careers', href: '/careers', icon: <WorkIcon /> },
        { name: 'Contact', href: '/contact', icon: <PhoneInTalkIcon /> },
    ];

    return (
        <nav className="w-full bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm transition-all duration-300">
            <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">

                {/* LOGO AREA */}
                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="flex items-center group cursor-pointer">
                    <Link href="/" className="flex items-center gap-3">
                        <div className="relative w-16 h-16 transition-transform duration-500 group-hover:scale-105">
                            <Image
                                src="https://img1.wsimg.com/isteam/ip/f997cb5d-e6b8-4e6c-b940-a6a129efa554/IMG-20210220-WA0004-removebg-preview.png/:/rs=w:512,h:512,m"
                                alt="Pratima Security Logo"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                        <div className="flex flex-col justify-center">
                            <span className="text-2xl font-black tracking-tighter text-slate-950 leading-none uppercase">
                                Pratima Security Services
                            </span>
                            <span className="text-[10px] tracking-[0.3em] font-bold text-blue-600 uppercase mt-1">
                                Elite Protection
                            </span>
                        </div>
                    </Link>
                </motion.div>

                {/* RIGHT AREA */}
                <div className="flex items-center gap-4">
                    <Link href="/contact" className="hidden sm:flex bg-slate-950 text-white px-6 py-2.5 text-xs font-black uppercase tracking-widest rounded-md hover:bg-blue-700 transition-all">
                        Get A Quote
                    </Link>

                    <IconButton onClick={() => setMobileOpen(true)} className="bg-slate-50 hover:bg-blue-50 transition-colors">
                        <MenuOpenIcon className="text-slate-900" fontSize="large" />
                    </IconButton>
                </div>
            </div>

            {/* GLOBAL DRAWER MENU */}
            <Drawer
                anchor="right"
                open={mobileOpen}
                onClose={() => setMobileOpen(false)}
                PaperProps={{ sx: { width: { xs: '100%', sm: 400 }, padding: '24px', backgroundColor: '#ffffff' } }}
            >
                <div className="h-full flex flex-col">
                    {/* Drawer Header */}
                    <div className="flex justify-between items-center mb-8 border-b pb-6">
                        <div className="flex flex-col">
                            <span className="font-black text-2xl tracking-tighter italic">MENU</span>
                            <span className="text-[9px] font-black text-blue-600 uppercase tracking-[0.3em]">Explore Our World</span>
                        </div>
                        <IconButton onClick={() => setMobileOpen(false)} className="bg-slate-100 hover:rotate-90 transition-all duration-300">
                            <CloseIcon />
                        </IconButton>
                    </div>

                    {/* Navigation List */}
                    <List className="flex flex-col gap-1 overflow-y-auto">
                        {menuItems.map((item, idx) => {
                            const isActive = pathname === item.href;
                            
                            return (
                                <motion.div key={item.name} initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: idx * 0.05 }}>
                                    <ListItem disablePadding sx={{ display: 'block' }}>
                                        <ListItemButton
                                            component={item.hasSubmenu ? 'div' : Link}
                                            href={item.hasSubmenu ? undefined : item.href}
                                            onClick={() => {
                                                if (item.hasSubmenu) {
                                                    setServicesOpen(!servicesOpen);
                                                } else {
                                                    setMobileOpen(false);
                                                }
                                            }}
                                            className={`rounded-xl py-4 transition-all ${isActive ? 'bg-blue-50/50' : 'hover:bg-slate-50'}`}
                                        >
                                            <ListItemIcon className={`${isActive ? 'text-blue-600' : 'text-slate-400'}`}>
                                                {item.icon}
                                            </ListItemIcon>
                                            <ListItemText
                                                primary={item.name}
                                                primaryTypographyProps={{
                                                    fontWeight: 900,
                                                    fontSize: '0.95rem',
                                                    className: `uppercase tracking-tight transition-all ${isActive ? 'text-blue-600' : 'text-slate-800'}`
                                                }}
                                            />
                                            {isActive && !item.hasSubmenu && <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />}
                                            {item.hasSubmenu ? (servicesOpen ? <ExpandLess className="text-blue-600" /> : <ExpandMore />) : null}
                                        </ListItemButton>

                                        {/* Dropdown / Submenu */}
                                        {item.hasSubmenu && (
                                            <Collapse in={servicesOpen} timeout="auto" unmountOnExit>
                                                <List component="div" disablePadding className="ml-6 border-l-2 border-blue-50 mt-1 mb-2">
                                                    {item.submenu?.map((sub) => {
                                                        const isSubActive = pathname === sub.href;
                                                        return (
                                                            <ListItemButton
                                                                key={sub.name}
                                                                component={Link}
                                                                href={sub.href}
                                                                onClick={() => setMobileOpen(false)}
                                                                className={`rounded-r-xl py-3 my-1 transition-all ${isSubActive ? 'bg-blue-50' : 'hover:bg-slate-50'}`}
                                                            >
                                                                <ListItemIcon className={`${isSubActive ? 'text-blue-600' : 'text-slate-400'}`}>
                                                                    {sub.icon}
                                                                </ListItemIcon>
                                                                <ListItemText 
                                                                    primary={sub.name} 
                                                                    primaryTypographyProps={{ 
                                                                        fontSize: '0.8rem', 
                                                                        fontWeight: 700,
                                                                        className: `uppercase tracking-widest ${isSubActive ? 'text-blue-600' : 'text-slate-500'}` 
                                                                    }} 
                                                                />
                                                            </ListItemButton>
                                                        );
                                                    })}
                                                </List>
                                            </Collapse>
                                        )}
                                    </ListItem>
                                </motion.div>
                            );
                        })}
                    </List>

                    {/* Footer CTA */}
                    <div className="mt-auto pt-8 flex flex-col gap-4">
                        <Divider />
                        <div className="py-4">
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4 text-center italic">24/7 Security Hotline</p>
                            <Link
                                href="tel:+919818152112"
                                className="w-full bg-blue-600 text-white py-5 rounded-2xl flex items-center justify-center gap-3 font-black uppercase tracking-widest shadow-xl shadow-blue-200 hover:bg-slate-900 transition-all"
                            >
                                <PhoneInTalkIcon /> Call Support
                            </Link>
                        </div>
                    </div>
                </div>
            </Drawer>
        </nav>
    );
};

export default Navbar;

// "use client";

// import React, { useState } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import { motion, AnimatePresence } from 'framer-motion';
// import { IconButton, Drawer, Divider, List, ListItem, ListItemButton, ListItemText, ListItemIcon } from '@mui/material';

// // MUI Icons
// import MenuOpenIcon from '@mui/icons-material/MenuOpen';
// import CloseIcon from '@mui/icons-material/Close';
// import ShieldIcon from '@mui/icons-material/Shield';
// import HomeIcon from '@mui/icons-material/Home';
// import BusinessIcon from '@mui/icons-material/Business';
// import EngineeringIcon from '@mui/icons-material/Engineering';
// import GroupsIcon from '@mui/icons-material/Groups';
// import WorkIcon from '@mui/icons-material/Work';
// import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
// import AssignmentIcon from '@mui/icons-material/Assignment';
// import { Work } from '@mui/icons-material';

// const Navbar: React.FC = () => {
//     const [mobileOpen, setMobileOpen] = useState(false);

//     const menuItems = [
//         { name: 'Home', href: '/', icon: <HomeIcon /> },
//         { name: 'About Us', href: '/about', icon: <BusinessIcon /> },
//         { name: 'Our Services', href: '/services', icon: <EngineeringIcon /> },
//         // { name: 'Security Services', href: '/services/security', icon: <ShieldIcon /> },
//         // { name: 'Facility Management', href: '/services/facility', icon: <EngineeringIcon /> },
//         { name: 'Our Clients', href: '/clients', icon: <GroupsIcon /> },
//         { name: 'Training Process', href: '/training', icon: <AssignmentIcon /> },
//         { name: 'Careers', href: '/careers', icon: <Work /> },
//         { name: 'Contact', href: '/contact', icon: <PhoneInTalkIcon /> },
//     ];

//     return (
//         <nav className="w-full bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm transition-all duration-300">
//             <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">

//                 {/* LOGO AREA - Desktop & Mobile */}
//                 <motion.div
//                     initial={{ opacity: 0, x: -20 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     className="flex items-center group cursor-pointer"
//                 >
//                     <Link href="/" className="flex items-center gap-3">
//                         {/* Pure Logo Image - No Box, No Border */}
//                         <div className="relative w-16 h-16 transition-transform duration-500 group-hover:scale-105">
//                             <Image
//                                 src="https://img1.wsimg.com/isteam/ip/f997cb5d-e6b8-4e6c-b940-a6a129efa554/IMG-20210220-WA0004-removebg-preview.png/:/rs=w:512,h:512,m"
//                                 alt="Pratima Security Logo"
//                                 fill
//                                 className="object-contain"
//                                 priority
//                             />
//                         </div>

//                         {/* Text Side */}
//                         <div className="flex flex-col justify-center">
//                             <span className="text-2xl font-black tracking-tighter text-slate-950 leading-none uppercase">
//                                 Pratima Security Services
//                             </span>
//                             <span className="text-[10px] tracking-[0.3em] font-bold text-blue-600 uppercase mt-1">
//                                 Elite Protection
//                             </span>
//                         </div>
//                     </Link>
//                 </motion.div>

//                 {/* UNIFIED MENU TOGGLE (For both Desktop & Mobile) */}
//                 <div className="flex items-center gap-4">
//                     <Link href="/contact" className="hidden sm:flex bg-slate-950 text-white px-6 py-2.5 text-xs font-black uppercase tracking-widest rounded-md hover:bg-blue-700 transition-all">
//                         Get A Quote
//                     </Link>

//                     <IconButton
//                         onClick={() => setMobileOpen(true)}
//                         className="bg-slate-50 hover:bg-blue-50 transition-colors"
//                     >
//                         <MenuOpenIcon className="text-slate-900" fontSize="large" />
//                     </IconButton>
//                 </div>
//             </div>

//             {/* GLOBAL DRAWER MENU */}
//             <Drawer
//                 anchor="right"
//                 open={mobileOpen}
//                 onClose={() => setMobileOpen(false)}
//                 PaperProps={{
//                     sx: {
//                         width: { xs: '100%', sm: 400 },
//                         padding: '24px',
//                         backgroundColor: '#ffffff'
//                     }
//                 }}
//             >
//                 <div className="h-full flex flex-col">
//                     {/* Drawer Header */}
//                     <div className="flex justify-between items-center mb-8 border-b pb-6">
//                         <div className="flex flex-col">
//                             <span className="font-black text-2xl tracking-tighter">NAVIGATION</span>
//                             <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">Explore Services</span>
//                         </div>
//                         <IconButton onClick={() => setMobileOpen(false)} className="bg-slate-100 hover:rotate-90 transition-all duration-300">
//                             <CloseIcon />
//                         </IconButton>
//                     </div>

//                     {/* Navigation List */}
//                     <List className="flex flex-col gap-1">
//                         {menuItems.map((item, idx) => (
//                             <motion.div
//                                 key={item.name}
//                                 initial={{ x: 50, opacity: 0 }}
//                                 animate={{ x: 0, opacity: 1 }}
//                                 transition={{ delay: idx * 0.05 }}
//                             >
//                                 <ListItem disablePadding>
//                                     <ListItemButton
//                                         component={Link}
//                                         href={item.href}
//                                         onClick={() => setMobileOpen(false)}
//                                         className="rounded-xl py-4 hover:bg-blue-50 group"
//                                     >
//                                         <ListItemIcon className="text-slate-400 group-hover:text-blue-600 transition-colors">
//                                             {item.icon}
//                                         </ListItemIcon>
//                                         <ListItemText
//                                             primary={item.name}
//                                             primaryTypographyProps={{
//                                                 fontWeight: 800,
//                                                 fontSize: '1rem',
//                                                 className: 'uppercase tracking-tight text-slate-800 group-hover:text-blue-600 transition-all'
//                                             }}
//                                         />
//                                     </ListItemButton>
//                                 </ListItem>
//                             </motion.div>
//                         ))}
//                     </List>

//                     {/* Drawer Footer / CTA */}
//                     <div className="mt-auto pt-8 flex flex-col gap-4">
//                         <Divider />
//                         <div className="py-4">
//                             <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4 text-center">Ready to secure your premises?</p>
//                             <Link
//                                 href="/contact"
//                                 onClick={() => setMobileOpen(false)}
//                                 className="w-full bg-blue-600 text-white py-5 rounded-2xl flex items-center justify-center gap-3 font-black uppercase tracking-widest shadow-xl shadow-blue-200 hover:bg-slate-900 transition-all"
//                             >
//                                 <PhoneInTalkIcon /> Contact Us Now
//                             </Link>
//                         </div>
//                     </div>
//                 </div>
//             </Drawer>
//         </nav>
//     );
// };

// export default Navbar;
