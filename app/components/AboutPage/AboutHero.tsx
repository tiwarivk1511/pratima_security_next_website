"use client";
import React from 'react';
import { Box, Typography, Container, Stack, Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import ShieldIcon from '@mui/icons-material/Shield';
import GroupIcon from '@mui/icons-material/Group';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import { motion } from 'framer-motion';

const AboutHero = () => {
  const stats = [
    { icon: <ShieldIcon sx={{ color: '#2563eb' }} />, label: "Years of Excellence", value: "10+" },
    { icon: <GroupIcon sx={{ color: '#2563eb' }} />, label: "Trained Personnel", value: "500+" },
    { icon: <LocationCityIcon sx={{ color: '#2563eb' }} />, label: "Branches Across India", value: "8" },
  ];

  return (
    <Box sx={{ bgcolor: '#fff', pt: { xs: 8, md: 15 }, pb: { xs: 10, md: 12 }, overflow: 'hidden' }}>
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          
          {/* LEFT: Content */}
          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Typography 
                variant="overline" 
                sx={{ color: '#2563eb', fontWeight: 900, letterSpacing: 3, display: 'block', mb: 2 }}
              >
                OUR LEGACY
              </Typography>
              <Typography 
                variant="h1" 
                sx={{ 
                  fontWeight: 900, 
                  fontSize: { xs: '2.5rem', md: '4rem' }, 
                  lineHeight: 1.1, 
                  color: '#0f172a',
                  mb: 3 
                }}
              >
                Your Safety is Our <span style={{ color: '#2563eb' }}>Lifelong Mission.</span>
              </Typography>
              <Typography sx={{ color: '#64748b', fontSize: '1.2rem', mb: 5, lineHeight: 1.8 }}>
                Pratima Security Services has been at the forefront of protection since its inception. 
                We don't just provide guards; we provide peace of mind through rigorous training, 
                unwavering integrity, and cutting-edge security management.
              </Typography>
              
              <Stack direction="row" spacing={2}>
                <Button 
                  variant="contained"
                  href='/services'
                  sx={{ 
                    bgcolor: '#0f172a', py: 2, px: 5, borderRadius: '12px', fontWeight: 800,
                    '&:hover': { bgcolor: '#2563eb' }
                  }}
                >
                  Our Services
                </Button>
                <Button 
                  variant="outlined" 
                  sx={{ 
                    color: '#0f172a', borderColor: '#e2e8f0', py: 2, px: 5, borderRadius: '12px', fontWeight: 800,
                    '&:hover': { borderColor: '#2563eb', color: '#2563eb' }
                  }}
                >
                  Contact Now
                </Button>
              </Stack>
            </motion.div>
          </Grid>

          {/* RIGHT: Image with Decorative Elements */}
          <Grid size={{ xs: 12, md: 6 }} sx={{ position: 'relative' }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <Box sx={{ position: 'relative', zIndex: 1 }}>
                {/* Main Image Container */}
                <Box 
                  component="img"
                  src="/guardingService.png" 
                  alt="Security Professional"
                  sx={{ 
                    width: '100%', 
                    borderRadius: '40px', 
                    boxShadow: '0 50px 100px -20px rgba(15, 23, 42, 0.25)',
                    transform: 'rotate(2deg)'
                  }}
                />
                {/* Decorative Blue Box */}
                <Box 
                  sx={{ 
                    position: 'absolute', inset: 0, bgcolor: '#2563eb', 
                    borderRadius: '40px', zIndex: -1, transform: 'rotate(-4deg)' 
                  }} 
                />
              </Box>
            </motion.div>
          </Grid>
        </Grid>

        {/* BOTTOM: Stats Bar */}
        <Box sx={{ mt: 10 }}>
          <Grid container spacing={4} sx={{ bgcolor: '#f8fafc', p: 5, borderRadius: '30px', border: '1px solid #e2e8f0' }}>
            {stats.map((item, index) => (
              <Grid size={{ xs: 12, sm: 4 }} key={index}>
                <Stack direction="row" spacing={2} alignItems="center" justifyContent="center">
                  <Box sx={{ p: 1.5, bgcolor: '#fff', borderRadius: '12px', display: 'flex', boxShadow: '0 10px 20px rgba(0,0,0,0.05)' }}>
                    {item.icon}
                  </Box>
                  <Box>
                    <Typography variant="h4" sx={{ fontWeight: 900, color: '#0f172a' }}>{item.value}</Typography>
                    <Typography variant="body2" sx={{ color: '#64748b', fontWeight: 600 }}>{item.label}</Typography>
                  </Box>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutHero;