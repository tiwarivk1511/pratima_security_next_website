"use client";
import React from 'react';
import { Box, Typography, Container, Stack } from '@mui/material';
import Grid from '@mui/material/Grid'; // Using Grid2 for stable 2x2 layout
import { motion } from 'framer-motion';
import VerifiedIcon from '@mui/icons-material/Verified';
import SpeedIcon from '@mui/icons-material/Speed';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';

const ServiceIntro = () => {
  const pillars = [
    {
      title: "Verified Personnel",
      desc: "Rigorous background checks & police verification.",
      icon: <VerifiedIcon />,
      gradient: "linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)"
    },
    {
      title: "Rapid Deployment",
      desc: "Scale your workforce within record time.",
      icon: <SpeedIcon />,
      gradient: "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)"
    },
    {
      title: "24/7 Command Center",
      desc: "Zero-gap communication at all times.",
      icon: <SupportAgentIcon />,
      gradient: "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)"
    }
  ];

  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, bgcolor: '#fff' }}>
      <Container maxWidth="lg">
        <Grid container spacing={8} alignItems="center">
          
          {/* LEFT CONTENT */}
          <Grid size={{ xs: 12, md: 5 }}>
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Typography variant="overline" sx={{ color: '#2563eb', fontWeight: 900, letterSpacing: 2 }}>
                Why Partner With Us
              </Typography>
              <Typography variant="h2" sx={{ fontWeight: 950, fontSize: { xs: '2.5rem', md: '3.8rem' }, color: '#0f172a', mt: 2, mb: 3 }}>
                A Workforce Driven by <span style={{ color: '#2563eb' }}>Integrity.</span>
              </Typography>
              <Typography sx={{ color: '#64748b', fontSize: '1.1rem', mb: 4, lineHeight: 1.7 }}>
                 At Pratima Security, we believe that manpower is not just about filling positions; it's about deploying trust. Our services are built on a foundation of discipline, accountability, and excellence.
              </Typography>
              <Stack spacing={2}>
                {['PSARA Licensed Agency', 'ISO 9001:2015 Certified', 'PAN India Presence','Licensed & Certified', 'Tech-Enabled Monitoring'].map((item, i) => (
                  <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Box sx={{ width: 24, height: 24, borderRadius: '50%', bgcolor: '#dbeafe', color: '#2563eb', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem', fontWeight: 900 }}>✓</Box>
                    <Typography sx={{ fontWeight: 700, color: '#1e293b' }}>{item}</Typography>
                  </Box>
                ))}
              </Stack>
            </motion.div>
          </Grid>

          {/* RIGHT 2x2 BENTO GRID */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Grid container spacing={2}>
              {/* Card 1, 2, 3 from Loop */}
              {pillars.map((pillar, index) => (
                <Grid size={{ xs: 12, sm: 6 }} key={index}>
                  <motion.div whileHover={{ y: -5 }} transition={{ type: 'spring', stiffness: 300 }}>
                    <Box sx={{ 
                      p: 4, height: '260px', borderRadius: '32px',
                      background: pillar.gradient,
                      border: '1px solid #e2e8f0',
                      display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                      transition: '0.3s',
                      '&:hover': { boxShadow: '0 20px 40px -10px rgba(0,0,0,0.05)', borderColor: '#2563eb' }
                    }}>
                      <Box sx={{ 
                        width: 50, height: 50, borderRadius: '16px', bgcolor: '#fff', 
                        display: 'flex', alignItems: 'center', justifyContent: 'center', 
                        boxShadow: '0 8px 16px rgba(0,0,0,0.04)', color: '#2563eb' 
                      }}>
                        {pillar.icon}
                      </Box>
                      <Box>
                        <Typography variant="h6" sx={{ fontWeight: 900, color: '#0f172a', mb: 1 }}>{pillar.title}</Typography>
                        <Typography variant="body2" sx={{ color: '#64748b', fontWeight: 500, lineHeight: 1.5 }}>{pillar.desc}</Typography>
                      </Box>
                    </Box>
                  </motion.div>
                </Grid>
              ))}

              {/* Card 4: Specialized Trust Card */}
              <Grid size={{ xs: 12, sm: 6 }}>
                <motion.div whileHover={{ y: -5 }}>
                  <Box sx={{ 
                    p: 4, height: '260px', borderRadius: '32px',
                    bgcolor: '#0f172a', color: '#fff',
                    display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
                    textAlign: 'center', position: 'relative', overflow: 'hidden'
                  }}>
                    {/* Subtle Background Glow */}
                    <Box sx={{ position: 'absolute', top: '-20%', right: '-20%', width: '100px', height: '100px', bgcolor: '#2563eb', filter: 'blur(50px)', opacity: 0.5 }} />
                    
                    <Typography variant="h2" sx={{ fontWeight: 950, color: '#3b82f6', mb: 0 }}>100%</Typography>
                    <Typography sx={{ fontWeight: 800, fontSize: '1rem', mb: 1 }}>COMPLIANCE</Typography>
                    <Typography variant="caption" sx={{ opacity: 0.6, letterSpacing: 1 }}>PF • ESI • LABOR LAWS</Typography>
                  </Box>
                </motion.div>
              </Grid>
            </Grid>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
};

export default ServiceIntro;

// "use client";
// import React from 'react';
// import { Box, Typography, Container, Stack } from '@mui/material';
// import Grid from '@mui/material/Grid';
// import { motion } from 'framer-motion';
// // Icons
// import VerifiedIcon from '@mui/icons-material/Verified';
// import SpeedIcon from '@mui/icons-material/Speed';
// import SupportAgentIcon from '@mui/icons-material/SupportAgent';

// const ServiceIntro = () => {
//   const pillars = [
//     {
//       title: "Verified Personnel",
//       desc: "Every staff member undergoes rigorous background checks and police verification before deployment.",
//       icon: <VerifiedIcon sx={{ fontSize: 40 }} />
//     },
//     {
//       title: "Rapid Deployment",
//       desc: "Our vast talent pool allows us to scale and deploy manpower within record time across India.",
//       icon: <SpeedIcon sx={{ fontSize: 40 }} />
//     },
//     {
//       title: "24/7 Command Center",
//       desc: "Continuous monitoring and support ensuring zero-gap communication between site and management.",
//       icon: <SupportAgentIcon sx={{ fontSize: 40 }} />
//     }
//   ];

//   return (
//     <Box component="section" sx={{ py: { xs: 10, md: 15 }, bgcolor: '#fff' }}>
//       <Container maxWidth="lg">
//         <Grid container spacing={8} alignItems="center">
          
//           {/* LEFT: Intro Text */}
//           <Grid size={{ xs: 12, md: 5 }}>
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8 }}
//             >
//               <Typography 
//                 variant="overline" 
//                 sx={{ color: '#2563eb', fontWeight: 900, letterSpacing: 2 }}
//               >
//                 Why Partner With Us
//               </Typography>
//               <Typography variant="h2" sx={{ 
//                 fontWeight: 900, fontSize: { xs: '2.5rem', md: '3.5rem' }, 
//                 lineHeight: 1.1, color: '#0f172a', mt: 2, mb: 4 
//               }}>
//                 A Workforce Driven by <span style={{ color: '#2563eb' }}>Integrity.</span>
//               </Typography>
//               <Typography sx={{ color: '#64748b', fontSize: '1.1rem', lineHeight: 1.8, mb: 4 }}>
//                 At Pratima Security, we believe that manpower is not just about filling positions; it's about deploying trust. Our services are built on a foundation of discipline, accountability, and excellence.
//               </Typography>
              
//               <Stack spacing={2} sx={{ mt: 4 }}>
//                 {['PSARA Licensed Agency', 'ISO 9001:2015 Certified', 'PAN India Presence'].map((text, i) => (
//                   <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
//                     <Box sx={{ width: 8, height: 8, bgcolor: '#2563eb', borderRadius: '50%' }} />
//                     <Typography sx={{ fontWeight: 700, color: '#1e293b' }}>{text}</Typography>
//                   </Box>
//                 ))}
//               </Stack>
//             </motion.div>
//           </Grid>

//           {/* RIGHT: Feature Cards */}
//           <Grid size={{ xs: 12, md: 7 }}>
//             <Grid container spacing={3}>
//               {pillars.map((pillar, index) => (
//                 <Grid size={{ xs: 12, sm: 6, md: 6 }} key={index} sx={{ 
//                   mt: index === 1 ? { md: 8 } : 0 // Staggered card effect
//                 }}>
//                   <motion.div
//                     initial={{ opacity: 0, scale: 0.9 }}
//                     whileInView={{ opacity: 1, scale: 1 }}
//                     viewport={{ once: true }}
//                     transition={{ duration: 0.5, delay: index * 0.1 }}
//                   >
//                     <Box sx={{ 
//                       p: 4, bgcolor: '#f8fafc', borderRadius: '30px',
//                       border: '1px solid #e2e8f0',
//                       transition: 'all 0.3s ease',
//                       '&:hover': {
//                         bgcolor: '#fff',
//                         borderColor: '#2563eb',
//                         boxShadow: '0 20px 40px rgba(37, 99, 235, 0.1)',
//                         transform: 'translateY(-10px)'
//                       }
//                     }}>
//                       <Box sx={{ color: '#2563eb', mb: 3 }}>
//                         {pillar.icon}
//                       </Box>
//                       <Typography variant="h5" sx={{ fontWeight: 800, color: '#0f172a', mb: 2 }}>
//                         {pillar.title}
//                       </Typography>
//                       <Typography sx={{ color: '#64748b', fontSize: '0.95rem', fontWeight: 500, lineHeight: 1.6 }}>
//                         {pillar.desc}
//                       </Typography>
//                     </Box>
//                   </motion.div>
//                 </Grid>
//               ))}
              
//               {/* Trust Badge Card */}
//               <Grid size={{ xs: 12, sm: 6, md: 6 }} sx={{ mt: { md: -4 } }}>
//                  <Box sx={{ 
//                    p: 4, bgcolor: '#0f172a', borderRadius: '30px', height: '100%',
//                    display: 'flex', flexDirection: 'column', justifyContent: 'center',
//                    color: '#fff', textAlign: 'center'
//                  }}>
//                     <Typography variant="h3" sx={{ fontWeight: 900, mb: 1 }}>100%</Typography>
//                     <Typography sx={{ fontWeight: 600, opacity: 0.8 }}>Compliance & PF/ESI Adherence</Typography>
//                  </Box>
//               </Grid>
//             </Grid>
//           </Grid>

//         </Grid>
//       </Container>
//     </Box>
//   );
// };

// export default ServiceIntro;