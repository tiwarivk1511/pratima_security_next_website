"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link'; // Navigation ke liye import
import { Box, Typography, Container, Button, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import Grid from '@mui/material/Grid'; // Modern Grid system
import { motion } from 'framer-motion';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import EastIcon from '@mui/icons-material/East';

const SERVICE_DETAILS = [
  {
    title: "Security Guarding",
    subtitle: "Tactical Protection",
    image: "https://img1.wsimg.com/isteam/ip/f997cb5d-e6b8-4e6c-b940-a6a129efa554/IMG-20210914-WA0014-3079a1c.jpg/:/cr=t:0%25,l:0%25,w:80.64%25,h:100%25/rs=w:776,h:776,cg:true",
    features: ["PSARA Verified Guards", "Armed & Unarmed Units", "Electronic Surveillance", "VVIP & PSO Escorts"],
    accent: "#3b82f6",
    path: "/services/security" // Route add kiya
  },
  {
    title: "Housekeeping",
    subtitle: "Facility Hygiene",
    image: "https://img1.wsimg.com/isteam/ip/f997cb5d-e6b8-4e6c-b940-a6a129efa554/IMG-20210224-WA0002.jpg/:/cr=t:12.43%25,l:0%25,w:100%25,h:75.14%25/rs=w:388,h:194,cg:true",
    features: ["Corporate Sanitization", "Mechanized Deep Cleaning", "Pantry Staffing", "Waste Management"],
    accent: "#60a5fa",
    path: "/services/facality" // Route add kiya
  },
  {
    title: "Payroll Staffing",
    subtitle: "Resource Management",
    image: "https://img1.wsimg.com/isteam/ip/f997cb5d-e6b8-4e6c-b940-a6a129efa554/manpower.jpg/:/cr=t:0%25,l:13.79%25,w:72.43%25,h:100%25/rs=w:388,h:388,cg:true/qt=q:34",
    features: ["Statutory Compliance", "ESI & PF Management", "Temp-to-Hire Staffing", "Bulk Recruitment"],
    accent: "#93c5fd",
    path: "/services/payroll" // Route add kiya
  }
];

const ServiceGrid = () => {
  return (
    <Box component="section" sx={{ 
      position: 'relative',
      py: { xs: 10, md: 18 }, 
      bgcolor: '#020617', 
      overflow: 'hidden',
      color: '#fff'
    }}>
      
      {/* --- BACKGROUNDS --- */}
      <Box sx={{ 
        position: 'absolute', inset: 0,
        backgroundImage: `radial-gradient(circle, #1e293b 1px, transparent 1px)`,
        backgroundSize: '40px 40px',
        opacity: 0.4,
        zIndex: 0
      }} />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        
        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: 10 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Typography variant="overline" sx={{ color: '#3b82f6', fontWeight: 900, letterSpacing: 4, display: 'block', mb: 1 }}>
              CORE VERTICALS
            </Typography>
            <Typography variant="h2" sx={{ 
              fontWeight: 950, color: '#fff', fontSize: { xs: '2.5rem', md: '4rem' },
              lineHeight: 1.1, letterSpacing: '-0.03em'
            }}>
              Integrated <span style={{ color: '#3b82f6' }}>Workforce</span> <br /> Solutions.
            </Typography>
          </motion.div>
        </Box>

        <Grid container spacing={4}>
          {SERVICE_DETAILS.map((service, index) => (
            <Grid size={{ xs: 12, md: 4 }} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, type: 'spring', stiffness: 100 }}
              >
                <Box sx={{ 
                  bgcolor: 'rgba(15, 23, 42, 0.6)', 
                  backdropFilter: 'blur(20px)',
                  borderRadius: '40px', 
                  height: '100%', 
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  position: 'relative',
                  transition: '0.4s all ease',
                  '&:hover': {
                    borderColor: service.accent,
                    transform: 'translateY(-10px)',
                    boxShadow: `0 30px 60px -15px rgba(0, 0, 0, 0.6)`,
                    '& .service-img': { transform: 'scale(1.1)' },
                    '& .service-btn': { bgcolor: service.accent, color: '#fff' }
                  }
                }}>
                  
                  {/* Image Section */}
                  <Box sx={{ 
                    position: 'relative', height: '220px', m: 2, 
                    borderRadius: '30px', overflow: 'hidden' 
                  }}>
                    <Box className="service-img" sx={{ position: 'relative', height: '100%', transition: '0.6s all ease' }}>
                      <Image 
                        src={service.image} 
                        alt={service.title} 
                        fill 
                        style={{ objectFit: 'cover', opacity: 0.7 }} 
                      />
                      <Box sx={{ 
                        position: 'absolute', inset: 0, 
                        background: `linear-gradient(to top, #0f172a 0%, transparent 80%)` 
                      }} />
                    </Box>
                    
                    <Box sx={{ 
                      position: 'absolute', top: 15, left: 15, 
                      bgcolor: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(10px)',
                      px: 2, py: 0.5, borderRadius: '100px', border: '1px solid rgba(255,255,255,0.1)'
                    }}>
                      <Typography variant="caption" sx={{ fontWeight: 800, color: service.accent, letterSpacing: 1.5 }}>
                        {service.subtitle.toUpperCase()}
                      </Typography>
                    </Box>
                  </Box>

                  {/* Content */}
                  <Box sx={{ p: 4, pt: 1 }}>
                    <Typography variant="h4" sx={{ fontWeight: 900, mb: 2, fontSize: '1.6rem' }}>
                      {service.title}
                    </Typography>
                    
                    <List sx={{ mb: 4 }}>
                      {service.features.map((feature, i) => (
                        <ListItem key={i} disableGutters sx={{ py: 0.6 }}>
                          <ListItemIcon sx={{ minWidth: '32px' }}>
                            <CheckCircleIcon sx={{ fontSize: '1.1rem', color: service.accent }} />
                          </ListItemIcon>
                          <ListItemText 
                            primary={feature} 
                            primaryTypographyProps={{ sx: { fontWeight: 500, color: '#94a3b8', fontSize: '0.9rem' } }} 
                          />
                        </ListItem>
                      ))}
                    </List>

                    {/* --- UPDATED ROUTING BUTTON --- */}
                    <Button 
                      component={Link} // Link component add kiya
                      href={service.path} // Path yahan se aayega
                      className="service-btn"
                      fullWidth 
                      endIcon={<EastIcon />}
                      sx={{ 
                        borderRadius: '20px', py: 2, fontWeight: 900, 
                        border: `1px solid rgba(255,255,255,0.1)`,
                        color: '#94a3b8',
                        textTransform: 'none',
                        transition: '0.3s all ease',
                        bgcolor: 'transparent'
                      }}
                    >
                      View Deployment Details
                    </Button>
                  </Box>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ServiceGrid;

// "use client";
// import React from 'react';
// import Image from 'next/image';
// import { Box, Typography, Container, Button, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
// import Grid from '@mui/material/Grid'; 
// import { motion } from 'framer-motion';
// import CheckCircleIcon from '@mui/icons-material/CheckCircle';
// import EastIcon from '@mui/icons-material/East';

// const SERVICE_DETAILS = [
//   {
//     title: "Security Guarding",
//     subtitle: "Tactical Protection",
//     image: "https://img1.wsimg.com/isteam/ip/f997cb5d-e6b8-4e6c-b940-a6a129efa554/IMG-20210914-WA0014-3079a1c.jpg/:/cr=t:0%25,l:0%25,w:80.64%25,h:100%25/rs=w:776,h:776,cg:true",
//     features: ["PSARA Verified Guards", "Armed & Unarmed Units", "Electronic Surveillance", "VVIP & PSO Escorts"],
//     accent: "#3b82f6",
//   },
//   {
//     title: "Housekeeping",
//     subtitle: "Facility Hygiene",
//     image: "https://img1.wsimg.com/isteam/ip/f997cb5d-e6b8-4e6c-b940-a6a129efa554/IMG-20210224-WA0002.jpg/:/cr=t:12.43%25,l:0%25,w:100%25,h:75.14%25/rs=w:388,h:194,cg:true",
//     features: ["Corporate Sanitization", "Mechanized Deep Cleaning", "Pantry Staffing", "Waste Management"],
//     accent: "#60a5fa",
//   },
//   {
//     title: "Payroll Staffing",
//     subtitle: "Resource Management",
//     image: "https://img1.wsimg.com/isteam/ip/f997cb5d-e6b8-4e6c-b940-a6a129efa554/manpower.jpg/:/cr=t:0%25,l:13.79%25,w:72.43%25,h:100%25/rs=w:388,h:388,cg:true/qt=q:34",
//     features: ["Statutory Compliance", "ESI & PF Management", "Temp-to-Hire Staffing", "Bulk Recruitment"],
//     accent: "#93c5fd",
//   }
// ];

// const ServiceGrid = () => {
//   return (
//     <Box component="section" sx={{ 
//       position: 'relative',
//       py: { xs: 10, md: 18 }, 
//       bgcolor: '#020617', // Deep Dark
//       overflow: 'hidden',
//       color: '#fff'
//     }}>
      
//       {/* --- MODERN DOTTED BACKGROUND --- */}
//       <Box sx={{ 
//         position: 'absolute', inset: 0,
//         backgroundImage: `radial-gradient(circle, #1e293b 1px, transparent 1px)`,
//         backgroundSize: '40px 40px',
//         opacity: 0.4,
//         zIndex: 0
//       }} />

//       {/* Radial Gradient Glow for Depth */}
//       <Box sx={{ 
//         position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
//         width: '100%', height: '100%',
//         background: 'radial-gradient(circle at center, rgba(37, 99, 235, 0.08) 0%, transparent 70%)',
//         zIndex: 0
//       }} />

//       <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        
//         {/* Header Section */}
//         <Box sx={{ textAlign: 'center', mb: 10 }}>
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//           >
//             <Typography variant="overline" sx={{ color: '#3b82f6', fontWeight: 900, letterSpacing: 4, display: 'block', mb: 1 }}>
//               CORE VERTICALS
//             </Typography>
//             <Typography variant="h2" sx={{ 
//               fontWeight: 950, color: '#fff', fontSize: { xs: '2.5rem', md: '4rem' },
//               lineHeight: 1.1, letterSpacing: '-0.03em'
//             }}>
//               Integrated <span style={{ color: '#3b82f6' }}>Workforce</span> <br /> Solutions.
//             </Typography>
//           </motion.div>
//         </Box>

//         <Grid container spacing={4}>
//           {SERVICE_DETAILS.map((service, index) => (
//             <Grid size={{ xs: 12, md: 4 }} key={index}>
//               <motion.div
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.15, type: 'spring', stiffness: 100 }}
//               >
//                 <Box sx={{ 
//                   bgcolor: 'rgba(15, 23, 42, 0.6)', 
//                   backdropFilter: 'blur(20px)',
//                   borderRadius: '40px', 
//                   height: '100%', 
//                   border: '1px solid rgba(255, 255, 255, 0.05)',
//                   position: 'relative',
//                   transition: '0.4s all ease',
//                   '&:hover': {
//                     borderColor: service.accent,
//                     transform: 'translateY(-10px)',
//                     boxShadow: `0 30px 60px -15px rgba(0, 0, 0, 0.6)`,
//                     '& .service-img': { transform: 'scale(1.1)' },
//                     '& .service-btn': { bgcolor: service.accent, color: '#fff' }
//                   }
//                 }}>
                  
//                   {/* Image Section with Mask */}
//                   <Box sx={{ 
//                     position: 'relative', height: '220px', m: 2, 
//                     borderRadius: '30px', overflow: 'hidden' 
//                   }}>
//                     <Box className="service-img" sx={{ position: 'relative', height: '100%', transition: '0.6s all ease' }}>
//                       <Image 
//                         src={service.image} 
//                         alt={service.title} 
//                         fill 
//                         style={{ objectFit: 'cover', opacity: 0.7 }} 
//                       />
//                       <Box sx={{ 
//                         position: 'absolute', inset: 0, 
//                         background: `linear-gradient(to top, #0f172a 0%, transparent 80%)` 
//                       }} />
//                     </Box>
                    
//                     <Box sx={{ 
//                       position: 'absolute', top: 15, left: 15, 
//                       bgcolor: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(10px)',
//                       px: 2, py: 0.5, borderRadius: '100px', border: '1px solid rgba(255,255,255,0.1)'
//                     }}>
//                       <Typography variant="caption" sx={{ fontWeight: 800, color: service.accent, letterSpacing: 1.5 }}>
//                         {service.subtitle.toUpperCase()}
//                       </Typography>
//                     </Box>
//                   </Box>

//                   {/* Content Container */}
//                   <Box sx={{ p: 4, pt: 1 }}>
//                     <Typography variant="h4" sx={{ fontWeight: 900, mb: 2, fontSize: '1.6rem' }}>
//                       {service.title}
//                     </Typography>
                    
//                     <List sx={{ mb: 4 }}>
//                       {service.features.map((feature, i) => (
//                         <ListItem key={i} disableGutters sx={{ py: 0.6 }}>
//                           <ListItemIcon sx={{ minWidth: '32px' }}>
//                             <CheckCircleIcon sx={{ fontSize: '1.1rem', color: service.accent }} />
//                           </ListItemIcon>
//                           <ListItemText 
//                             primary={feature} 
//                             primaryTypographyProps={{ sx: { fontWeight: 500, color: '#94a3b8', fontSize: '0.9rem' } }} 
//                           />
//                         </ListItem>
//                       ))}
//                     </List>

//                     <Button 
//                       className="service-btn"
//                       fullWidth 
//                       endIcon={<EastIcon />}
//                       sx={{ 
//                         borderRadius: '20px', py: 2, fontWeight: 900, 
//                         border: `1px solid rgba(255,255,255,0.1)`,
//                         color: '#94a3b8',
//                         textTransform: 'none',
//                         transition: '0.3s all ease',
//                         bgcolor: 'transparent'
//                       }}
//                     >
//                       View Deployment Details
//                     </Button>
//                   </Box>
//                 </Box>
//               </motion.div>
//             </Grid>
//           ))}
//         </Grid>
//       </Container>
//     </Box>
//   );
// };

// export default ServiceGrid;