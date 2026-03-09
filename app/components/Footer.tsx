"use client";
import React, { useState } from 'react'; // Added useState
import Image from 'next/image';
import { Box, Typography, Stack, IconButton, Divider, TextField, Button, CircularProgress } from '@mui/material';
import Grid from '@mui/material/Grid';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import SendIcon from '@mui/icons-material/Send';
import SecurityIcon from '@mui/icons-material/Security';

// Firebase Imports
import { ref, push, set, serverTimestamp } from "firebase/database";
import { rtdb } from "../../firebaseConfig"; // Adjust the path as needed

const Footer = () => {
    const currentYear = new Date().getFullYear();

    // --- NEW: State for Newsletter ---
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubscribe = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setLoading(true);
        try {
            // Email mein se '.' ko '_' se replace karein kyunki Firebase path mein '.' allowed nahi hota
            const safeEmail = email.replace(/\./g, '_');

            // 'push()' ki jagah hum 'ref' mein safeEmail use kar rahe hain
            // Isse har email ki ek hi unique entry rahegii
            const subRef = ref(rtdb, `subscriptions/${safeEmail}`);

            await set(subRef, {
                userEmail: email, // Original email yahan save hogi
                userName: "Newsletter Subscriber",
                subscribedAt: serverTimestamp(),
                source: 'footer_newsletter',
                status: 'active'
            });

            alert("Subscribed successfully!");
            setEmail('');
        } catch (error: any) {
            console.error("Subscription Error:", error);
            alert("Failed to subscribe. Please try again.");
        } finally {
            setLoading(false);
        }
    };
    const footerLinks = {
        Company: ["About Us", "Our Team", "Careers", "Contact"],
        Services: ["Industrial Security", "Residential Security", "Event Security", "Bodyguards"],
        Support: ["Privacy Policy", "Terms of Service", "FAQ", "Site Map"],
    };

    return (
        <Box sx={{ bgcolor: '#020617', color: '#f8fafc', pt: 10, pb: 4, px: { xs: 3, md: 10 }, borderTop: '1px solid #1e293b' }}>
            <Grid container spacing={8}>

                {/* Brand Section */}
                <Grid size={{ xs: 12, md: 4 }}>
                    <Stack spacing={3}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                            <Image
                                src="https://img1.wsimg.com/isteam/ip/f997cb5d-e6b8-4e6c-b940-a6a129efa554/IMG-20210220-WA0004-removebg-preview.png/:/rs=w:512,h:512,m"
                                alt="Pratima Security Logo"
                                width={60}
                                height={60}
                                style={{ objectFit: 'contain' }}
                                priority
                            />
                            <Typography variant="h5" sx={{ fontWeight: 900, letterSpacing: -0.5 }}>
                                PRATIMA <span style={{ color: '#2563eb' }}>SECURITY</span> SERVICES
                            </Typography>
                        </Box>
                        <Typography sx={{ color: '#94a3b8', lineHeight: 1.8, maxWidth: '350px' }}>
                            Providing world-class security solutions with integrity and excellence. Your safety is our mission across all 8 major branches in India.
                        </Typography>
                        <Stack direction="row" spacing={1}>
                            {[FacebookIcon, TwitterIcon, LinkedInIcon, InstagramIcon].map((Icon, index) => (
                                <IconButton
                                    key={index}
                                    sx={{
                                        bgcolor: '#0f172a', color: '#94a3b8',
                                        '&:hover': { bgcolor: '#2563eb', color: '#fff', transform: 'translateY(-3px)' },
                                        transition: 'all 0.3s'
                                    }}
                                >
                                    <Icon fontSize="small" />
                                </IconButton>
                            ))}
                        </Stack>
                    </Stack>
                </Grid>

                {/* Links Sections */}
                {Object.entries(footerLinks).map(([title, links]) => (
                    <Grid size={{ xs: 6, sm: 4, md: 2 }} key={title}>
                        <Typography sx={{ fontWeight: 800, mb: 3, color: '#fff', fontSize: '0.9rem', letterSpacing: 1 }}>
                            {title.toUpperCase()}
                        </Typography>
                        <Stack spacing={1.5}>
                            {links.map((link) => (
                                <Typography
                                    key={link}
                                    component="a"
                                    href="#"
                                    sx={{
                                        color: '#64748b', textDecoration: 'none', fontSize: '0.9rem',
                                        '&:hover': { color: '#2563eb', pl: 0.5 },
                                        transition: 'all 0.2s'
                                    }}
                                >
                                    {link}
                                </Typography>
                            ))}
                        </Stack>
                    </Grid>
                ))}

                {/* Newsletter Section */}
                <Grid size={{ xs: 12, md: 2 }}>
                    <Typography sx={{ fontWeight: 800, mb: 3, color: '#fff', fontSize: '0.9rem', letterSpacing: 1 }}>
                        STAY UPDATED
                    </Typography>
                    <Typography sx={{ color: '#94a3b8', fontSize: '0.85rem', mb: 2 }}>
                        Subscribe for security tips and updates.
                    </Typography>
                    <Box component="form" onSubmit={handleSubscribe} sx={{ position: 'relative' }}>
                        <TextField
                            fullWidth
                            placeholder="Email Address"
                            variant="outlined"
                            size="small"
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            disabled={loading}
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    bgcolor: '#0f172a', borderRadius: '12px', color: '#fff',
                                    '& fieldset': { borderColor: '#1e293b' }
                                }
                            }}
                        />
                        <Button
                            type="submit"
                            disabled={loading}
                            sx={{
                                minWidth: 0, position: 'absolute', right: 5, top: 4, bgcolor: '#2563eb', color: '#fff',
                                borderRadius: '8px', p: 0.8, '&:hover': { bgcolor: '#1d4ed8' },
                                '&.Mui-disabled': { bgcolor: '#1e293b', color: '#64748b' }
                            }}
                        >
                            {loading ? <CircularProgress size={18} color="inherit" /> : <SendIcon sx={{ fontSize: 18 }} />}
                        </Button>
                    </Box>
                </Grid>
            </Grid>

            <Divider sx={{ my: 6, borderColor: '#1e293b' }} />

            {/* Bottom Footer */}
            <Stack
                direction={{ xs: 'column', sm: 'row' }}
                justifyContent="space-between"
                alignItems="center"
                spacing={2}
            >
                <Typography sx={{ color: '#64748b', fontSize: '0.85rem' }}>
                    © {currentYear} Pratima Security Services. All rights reserved.
                </Typography>
                <Typography sx={{ color: '#64748b', fontSize: '0.85rem' }}>
                    Designed with Excellence.
                </Typography>
            </Stack>
        </Box>
    );
};

export default Footer;


// "use client";
// import React from 'react';
// import Image from 'next/image';
// import { Box, Typography, Stack, IconButton, Divider, TextField, Button } from '@mui/material';
// import Grid from '@mui/material/Grid';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import TwitterIcon from '@mui/icons-material/Twitter';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import SendIcon from '@mui/icons-material/Send';
// import SecurityIcon from '@mui/icons-material/Security';

// const Footer = () => {
//     const currentYear = new Date().getFullYear();

//     const footerLinks = {
//         Company: ["About Us", "Our Team", "Careers", "Contact"],
//         Services: ["Industrial Security", "Residential Security", "Event Security", "Bodyguards"],
//         Support: ["Privacy Policy", "Terms of Service", "FAQ", "Site Map"],
//     };

//     return (
//         <Box sx={{ bgcolor: '#020617', color: '#f8fafc', pt: 10, pb: 4, px: { xs: 3, md: 10 }, borderTop: '1px solid #1e293b' }}>
//             <Grid container spacing={8}>

//                 {/* Brand Section */}
//                 <Grid size={{ xs: 12, md: 4 }}>
//                     <Stack spacing={3}>
//                         <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
//                             <Image
//                                 src="https://img1.wsimg.com/isteam/ip/f997cb5d-e6b8-4e6c-b940-a6a129efa554/IMG-20210220-WA0004-removebg-preview.png/:/rs=w:512,h:512,m"
//                                 alt="Pratima Security Logo"
//                                 width={60}
//                                 height={60}
//                                 style={{ objectFit: 'contain' }}
//                                 priority
//                             />
//                             <Typography variant="h5" sx={{ fontWeight: 900, letterSpacing: -0.5 }}>
//                                 PRATIMA <span style={{ color: '#2563eb' }}>SECURITY</span> SERVICES
//                             </Typography>
//                         </Box>
//                         <Typography sx={{ color: '#94a3b8', lineHeight: 1.8, maxWidth: '350px' }}>
//                             Providing world-class security solutions with integrity and excellence. Your safety is our mission across all 8 major branches in India.
//                         </Typography>
//                         <Stack direction="row" spacing={1}>
//                             {[FacebookIcon, TwitterIcon, LinkedInIcon, InstagramIcon].map((Icon, index) => (
//                                 <IconButton
//                                     key={index}
//                                     sx={{
//                                         bgcolor: '#0f172a', color: '#94a3b8',
//                                         '&:hover': { bgcolor: '#2563eb', color: '#fff', transform: 'translateY(-3px)' },
//                                         transition: 'all 0.3s'
//                                     }}
//                                 >
//                                     <Icon fontSize="small" />
//                                 </IconButton>
//                             ))}
//                         </Stack>
//                     </Stack>
//                 </Grid>

//                 {/* Links Sections */}
//                 {Object.entries(footerLinks).map(([title, links]) => (
//                     <Grid size={{ xs: 6, sm: 4, md: 2 }} key={title}>
//                         <Typography sx={{ fontWeight: 800, mb: 3, color: '#fff', fontSize: '0.9rem', letterSpacing: 1 }}>
//                             {title.toUpperCase()}
//                         </Typography>
//                         <Stack spacing={1.5}>
//                             {links.map((link) => (
//                                 <Typography
//                                     key={link}
//                                     component="a"
//                                     href="#"
//                                     sx={{
//                                         color: '#64748b', textDecoration: 'none', fontSize: '0.9rem',
//                                         '&:hover': { color: '#2563eb', pl: 0.5 },
//                                         transition: 'all 0.2s'
//                                     }}
//                                 >
//                                     {link}
//                                 </Typography>
//                             ))}
//                         </Stack>
//                     </Grid>
//                 ))}

//                 {/* Newsletter Section */}
//                 <Grid size={{ xs: 12, md: 2 }}>
//                     <Typography sx={{ fontWeight: 800, mb: 3, color: '#fff', fontSize: '0.9rem', letterSpacing: 1 }}>
//                         STAY UPDATED
//                     </Typography>
//                     <Typography sx={{ color: '#94a3b8', fontSize: '0.85rem', mb: 2 }}>
//                         Subscribe for security tips and updates.
//                     </Typography>
//                     <Box sx={{ position: 'relative' }}>
//                         <TextField
//                             fullWidth
//                             placeholder="Email Address"
//                             variant="outlined"
//                             size="small"
//                             sx={{
//                                 '& .MuiOutlinedInput-root': {
//                                     bgcolor: '#0f172a', borderRadius: '12px', color: '#fff',
//                                     '& fieldset': { borderColor: '#1e293b' }
//                                 }
//                             }}
//                         />
//                         <Button
//                             sx={{
//                                 minWidth: 0, position: 'absolute', right: 5, top: 4, bgcolor: '#2563eb', color: '#fff',
//                                 borderRadius: '8px', p: 0.8, '&:hover': { bgcolor: '#1d4ed8' }
//                             }}
//                         >
//                             <SendIcon sx={{ fontSize: 18 }} />
//                         </Button>
//                     </Box>
//                 </Grid>
//             </Grid>

//             <Divider sx={{ my: 6, borderColor: '#1e293b' }} />

//             {/* Bottom Footer */}
//             <Stack
//                 direction={{ xs: 'column', sm: 'row' }}
//                 justifyContent="space-between"
//                 alignItems="center"
//                 spacing={2}
//             >
//                 <Typography sx={{ color: '#64748b', fontSize: '0.85rem' }}>
//                     © {currentYear} Pratima Security Services. All rights reserved.
//                 </Typography>
//                 <Typography sx={{ color: '#64748b', fontSize: '0.85rem' }}>
//                     Designed with Excellence.
//                 </Typography>
//             </Stack>
//         </Box>
//     );
// };

// export default Footer;