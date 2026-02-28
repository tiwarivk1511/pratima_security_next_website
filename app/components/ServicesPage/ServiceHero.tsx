"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link'; // Navigation ke liye
import { Box, Typography, Container, Stack, Button, Chip } from '@mui/material';
import Grid from '@mui/material/Grid'; // Modern Grid system
import { motion } from 'framer-motion';
// Icons
import ShieldIcon from '@mui/icons-material/Shield';
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import GroupsIcon from '@mui/icons-material/Groups';

const ServicesHero = () => {
  const springTransition = { type: "spring" as const, stiffness: 100, damping: 20 };

  const services = [
    { icon: <ShieldIcon />, title: "Elite Security Guards", color: "#3b82f6" },
    { icon: <CleaningServicesIcon />, title: "Soft Services & Housekeeping", color: "#60a5fa" },
    { icon: <GroupsIcon />, title: "Payroll & Staffing", color: "#93c5fd" },
  ];

  return (
    <Box component="section" sx={{ 
      position: 'relative', 
      bgcolor: '#020617', 
      pt: { xs: 15, md: 25 }, 
      pb: { xs: 10, md: 20 },
      overflow: 'hidden',
      color: '#fff'
    }}>
      {/* --- AMBIENT BACKGROUND --- */}
      <Box sx={{ 
        position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
        backgroundImage: 'linear-gradient(to right, #1e293b 1px, transparent 1px), linear-gradient(to bottom, #1e293b 1px, transparent 1px)',
        backgroundSize: '60px 60px', opacity: 0.15, zIndex: 0 
      }} />
      
      <Box sx={{ 
        position: 'absolute', top: '-10%', right: '10%', width: '500px', height: '500px', 
        bgcolor: 'rgba(37, 99, 235, 0.15)', filter: 'blur(120px)', borderRadius: '50%', zIndex: 0 
      }} />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={8} alignItems="center">
          
          {/* LEFT: CONTENT */}
          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={springTransition}
            >
              <Chip 
                label="ESTABLISHED 2017" 
                sx={{ 
                  borderRadius: '6px', bgcolor: 'rgba(59, 130, 246, 0.1)', 
                  color: '#60a5fa', border: '1px solid rgba(59, 130, 246, 0.3)',
                  px: 1, mb: 3, fontWeight: 900, fontSize: '0.7rem', letterSpacing: 2 
                }} 
              />
              
              <Typography variant="h1" sx={{ 
                fontWeight: 900, 
                fontSize: { xs: '3.2rem', md: '5rem' }, 
                lineHeight: 0.95, mb: 3, letterSpacing: '-0.04em'
              }}>
                Superior <br /> 
                <span style={{ 
                  color: '#3b82f6',
                  background: 'linear-gradient(to right, #3b82f6, #93c5fd)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>Manpower</span> <br />
                Solutions.
              </Typography>

              <Typography sx={{ 
                color: '#94a3b8', fontSize: '1.2rem', mb: 6, 
                lineHeight: 1.6, maxWidth: '520px', fontWeight: 400 
              }}>
                Deploying verified security professionals and trained housekeeping staff across India. We manage your workforce, so you can focus on growth.
              </Typography>

              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3}>
                {/* --- FIXED BUTTON WITH REDIRECT --- */}
                <Button 
                  component={Link}
                  href="/contact"
                  variant="contained" 
                  disableElevation
                  sx={{ 
                    bgcolor: '#3b82f6', 
                    color: '#fff !important', 
                    px: 6, py: 2.5, 
                    borderRadius: '50px', 
                    fontWeight: 900, fontSize: '1rem',
                    textTransform: 'none', 
                    whiteSpace: 'nowrap',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    boxShadow: '0 10px 25px -5px rgba(59, 130, 246, 0.5)',
                    '&:hover': { 
                      bgcolor: '#2563eb',
                      transform: 'translateY(-3px)',
                      boxShadow: '0 20px 35px -5px rgba(59, 130, 246, 0.6)'
                    }
                  }}
                >
                  Consult Our Experts
                </Button>

                <Button 
                  component={Link}
                  href="/services"
                  variant="outlined" 
                  sx={{ 
                    borderColor: '#1e293b', color: '#fff', px: 6, py: 2.5, 
                    borderRadius: '50px', fontWeight: 900, fontSize: '1rem', 
                    textTransform: 'none', 
                    '&:hover': { borderColor: '#3b82f6', bgcolor: 'rgba(255,255,255,0.05)' }
                  }}
                >
                  Our Full Catalog
                </Button>
              </Stack>
            </motion.div>
          </Grid>

          {/* RIGHT: IMAGE & INTERACTIVE CARDS */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ position: 'relative' }}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                style={{ position: 'relative', zIndex: 2 }}
              >
                <Box sx={{ 
                  position: 'relative', width: '100%', height: { xs: '350px', md: '550px' },
                  borderRadius: '40px', overflow: 'hidden',
                  border: '1px solid rgba(255,255,255,0.1)',
                  boxShadow: '0 50px 100px -20px rgba(0,0,0,0.5)'
                }}>
                  <Image 
                    src="https://img1.wsimg.com/isteam/stock/5Wz3ge8/:/cr=t:0%25,l:16.69%25,w:66.61%25,h:99.99%25/rs=w:776,h:776,cg:true,m"
                    alt="Pratima Security Staff"
                    fill
                    style={{ objectFit: 'cover' }}
                    priority
                  />
                  <Box sx={{ 
                    position: 'absolute', inset: 0, 
                    background: 'linear-gradient(to bottom, transparent 60%, #020617)' 
                  }} />
                </Box>
              </motion.div>

              <Stack spacing={2} sx={{ 
                position: 'absolute', bottom: '-40px', left: { xs: '20px', md: '-60px' }, 
                zIndex: 3, width: '100%', maxWidth: '320px' 
              }}>
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ ...springTransition, delay: 0.5 + (index * 0.1) }}
                    whileHover={{ x: 10, scale: 1.02 }}
                  >
                    <Box sx={{ 
                      p: 2.5, bgcolor: 'rgba(15, 23, 42, 0.8)', 
                      backdropFilter: 'blur(16px)',
                      borderRadius: '20px',
                      border: '1px solid rgba(255,255,255,0.1)',
                      display: 'flex', alignItems: 'center', gap: 2,
                      boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
                    }}>
                      <Box sx={{ 
                        p: 1.5, borderRadius: '12px', bgcolor: 'rgba(59, 130, 246, 0.2)', color: '#60a5fa' 
                      }}>
                        {service.icon}
                      </Box>
                      <Typography sx={{ fontWeight: 800, color: '#fff', fontSize: '0.95rem' }}>
                        {service.title}
                      </Typography>
                    </Box>
                  </motion.div>
                ))}
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ServicesHero;

// "use client";
// import React from 'react';
// import Image from 'next/image';
// import { Box, Typography, Container, Stack, Button, Chip } from '@mui/material';
// import Grid from '@mui/material/Grid';
// import { motion } from 'framer-motion';
// // Icons
// import ShieldIcon from '@mui/icons-material/Shield';
// import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
// import GroupsIcon from '@mui/icons-material/Groups';

// const ServicesHero = () => {
//   // Spring physics for smooth, error-free animations in Next.js 16
//   const springTransition = { type: "spring" as const, stiffness: 100, damping: 20 };

//   const services = [
//     { icon: <ShieldIcon />, title: "Elite Security Guards", color: "#3b82f6" },
//     { icon: <CleaningServicesIcon />, title: "Soft Services & Housekeeping", color: "#60a5fa" },
//     { icon: <GroupsIcon />, title: "Payroll & Staffing", color: "#93c5fd" },
//   ];

//   return (
//     <Box component="section" sx={{ 
//       position: 'relative', 
//       bgcolor: '#020617', // Deep Midnight Black
//       pt: { xs: 15, md: 25 }, 
//       pb: { xs: 10, md: 20 },
//       overflow: 'hidden',
//       color: '#fff'
//     }}>
//       {/* --- AMBIENT BACKGROUND --- */}
//       {/* Grid Pattern */}
//       <Box sx={{ 
//         position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
//         backgroundImage: 'linear-gradient(to right, #1e293b 1px, transparent 1px), linear-gradient(to bottom, #1e293b 1px, transparent 1px)',
//         backgroundSize: '60px 60px', opacity: 0.15, zIndex: 0 
//       }} />
      
//       {/* Blue Glows */}
//       <Box sx={{ 
//         position: 'absolute', top: '-10%', right: '10%', width: '500px', height: '500px', 
//         bgcolor: 'rgba(37, 99, 235, 0.15)', filter: 'blur(120px)', borderRadius: '50%', zIndex: 0 
//       }} />

//       <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
//         <Grid container spacing={8} alignItems="center">
          
//           {/* LEFT: CONTENT */}
//           <Grid size={{ xs: 12, md: 6 }}>
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={springTransition}
//             >
//               <Chip 
//                 label="ESTABLISHED 2017" 
//                 sx={{ 
//                   borderRadius: '6px', bgcolor: 'rgba(59, 130, 246, 0.1)', 
//                   color: '#60a5fa', border: '1px solid rgba(59, 130, 246, 0.3)',
//                   px: 1, mb: 3, fontWeight: 900, fontSize: '0.7rem', letterSpacing: 2 
//                 }} 
//               />
              
//               <Typography variant="h1" sx={{ 
//                 fontWeight: 900, 
//                 fontSize: { xs: '3.2rem', md: '5rem' }, 
//                 lineHeight: 0.95, mb: 3, letterSpacing: '-0.04em'
//               }}>
//                 Superior <br /> 
//                 <span style={{ 
//                   color: '#3b82f6',
//                   background: 'linear-gradient(to right, #3b82f6, #93c5fd)',
//                   WebkitBackgroundClip: 'text',
//                   WebkitTextFillColor: 'transparent'
//                 }}>Manpower</span> <br />
//                 Solutions.
//               </Typography>

//               <Typography sx={{ 
//                 color: '#94a3b8', fontSize: '1.2rem', mb: 6, 
//                 lineHeight: 1.6, maxWidth: '520px', fontWeight: 400 
//               }}>
//                 Deploying verified security professionals and trained housekeeping staff across India. We manage your workforce, so you can focus on growth.
//               </Typography>

//               <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3}>
//                 <Button variant="contained" sx={{ 
//                   bgcolor: '#3b82f6', color: '#fff', px: 6, py: 2.5, 
//                   borderRadius: '12px', fontWeight: 900, fontSize: '1rem',
//                   textTransform: 'none', '&:hover': { bgcolor: '#2563eb' },
//                   boxShadow: '0 15px 30px rgba(59, 130, 246, 0.4)'
//                 }}>
//                   Consult Our Experts
//                 </Button>
//                 <Button variant="outlined" sx={{ 
//                   borderColor: '#1e293b', color: '#fff', px: 6, py: 2.5, 
//                   borderRadius: '12px', fontWeight: 900, fontSize: '1rem', 
//                   textTransform: 'none', '&:hover': { borderColor: '#3b82f6', bgcolor: 'rgba(255,255,255,0.05)' }
//                 }}>
//                   Our Full Catalog
//                 </Button>
//               </Stack>
//             </motion.div>
//           </Grid>

//           {/* RIGHT: IMAGE & INTERACTIVE CARDS */}
//           <Grid size={{ xs: 12, md: 6 }}>
//             <Box sx={{ position: 'relative' }}>
              
//               {/* Main Professional Image */}
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 1 }}
//                 style={{ position: 'relative', zIndex: 2 }}
//               >
//                 <Box sx={{ 
//                   position: 'relative', width: '100%', height: { xs: '350px', md: '550px' },
//                   borderRadius: '40px', overflow: 'hidden',
//                   border: '1px solid rgba(255,255,255,0.1)',
//                   boxShadow: '0 50px 100px -20px rgba(0,0,0,0.5)'
//                 }}>
//                   <Image 
//                     src="https://img1.wsimg.com/isteam/stock/5Wz3ge8/:/cr=t:0%25,l:16.69%25,w:66.61%25,h:99.99%25/rs=w:776,h:776,cg:true,m" // Replace with your image (showing guards/staff)
//                     alt="Pratima Security Staff"
//                     fill
//                     style={{ objectFit: 'cover' }}
//                     priority
//                   />
//                   <Box sx={{ 
//                     position: 'absolute', inset: 0, 
//                     background: 'linear-gradient(to bottom, transparent 60%, #020617)' 
//                   }} />
//                 </Box>
//               </motion.div>

//               {/* Floating Glassmorphism Cards */}
//               <Stack spacing={2} sx={{ 
//                 position: 'absolute', bottom: '-40px', left: { xs: '20px', md: '-60px' }, 
//                 zIndex: 3, width: '100%', maxWidth: '320px' 
//               }}>
//                 {services.map((service, index) => (
//                   <motion.div
//                     key={index}
//                     initial={{ opacity: 0, x: 50 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ ...springTransition, delay: 0.5 + (index * 0.1) }}
//                     whileHover={{ x: 10, scale: 1.02 }}
//                   >
//                     <Box sx={{ 
//                       p: 2.5, bgcolor: 'rgba(15, 23, 42, 0.8)', 
//                       backdropFilter: 'blur(16px)',
//                       borderRadius: '20px',
//                       border: '1px solid rgba(255,255,255,0.1)',
//                       display: 'flex', alignItems: 'center', gap: 2,
//                       boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
//                     }}>
//                       <Box sx={{ 
//                         p: 1.5, borderRadius: '12px', bgcolor: 'rgba(59, 130, 246, 0.2)', color: '#60a5fa' 
//                       }}>
//                         {service.icon}
//                       </Box>
//                       <Typography sx={{ fontWeight: 800, color: '#fff', fontSize: '0.95rem' }}>
//                         {service.title}
//                       </Typography>
//                     </Box>
//                   </motion.div>
//                 ))}
//               </Stack>

//             </Box>
//           </Grid>

//         </Grid>
//       </Container>
//     </Box>
//   );
// };

// export default ServicesHero;