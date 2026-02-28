"use client";
import React, { useState, forwardRef } from 'react';
import { Box, Typography, Button, TextField, Modal, Stack, Paper, IconButton, Checkbox, FormControlLabel } from '@mui/material';
import Grid from '@mui/material/Grid';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import CloseIcon from '@mui/icons-material/Close';
import EmailIcon from '@mui/icons-material/Email';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ScheduleIcon from '@mui/icons-material/Schedule';
import dynamic from 'next/dynamic';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail } from '@mui/icons-material';

const DynamicMap = dynamic(() => import('../Map'), { ssr: false });
const position: [number, number] = [28.628743, 77.470903];

const inputStyle = {
    '& .MuiOutlinedInput-root': {
        borderRadius: '16px',
        bgcolor: '#f8fafc',
        '& fieldset': { borderColor: '#e2e8f0' },
        '&:hover fieldset': { borderColor: '#2563eb' },
    }
};

const ContactUsSection = forwardRef<HTMLElement>((props, ref) => {
    const [open, setOpen] = useState(false);
    const [fileName, setFileName] = useState<string | null>(null);

    const branches = ["Prayagraj", "Ghaziabad", "Noida", "Lucknow", "Delhi", "Rewa", "Bhopal", "Mirzapur"];

    // File handling with filter
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setFileName(file.name);
        }
    };

    return (
        <section id="contact-form" ref={ref}>
            <Box sx={{ minHeight: '100vh', display: 'flex', bgcolor: '#f8fafc' }}>
                <Grid container sx={{ width: '100%' }}>

                    {/* LEFT SIDE: Content */}
                    <Grid size={{ xs: 12, lg: 6 }} sx={{ p: { xs: 4, md: 8 }, bgcolor: '#fff' }}>
                        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>

                            <Typography variant="overline" sx={{ fontWeight: 900, color: '#2563eb', letterSpacing: 3 }}>
                                Connect with us
                            </Typography>
                            <Typography variant="h2" sx={{ fontWeight: 900, mb: 2, color: '#0f172a', lineHeight: 1.1 }}>
                                Better yet, see us <span style={{ color: '#2563eb' }}>in person!</span>
                            </Typography>
                            <Typography sx={{ color: '#64748b', mb: 6, fontSize: '1.1rem' }}>
                                We love our customers, so feel free to visit during normal business hours.
                            </Typography>

                            <Stack spacing={4}>
                                {/* WhatsApp Button - CTA Enabled */}
                                <Box>
                                    <Button
                                        startIcon={<WhatsAppIcon />}
                                        variant="contained"
                                        href="https://wa.me/919818152112" // WhatsApp CTA
                                        target="_blank"
                                        sx={{
                                            bgcolor: '#22c55e', borderRadius: '14px', px: 4, py: 1.8, fontWeight: 800,
                                            '&:hover': { bgcolor: '#16a34a' }, boxShadow: '0 10px 20px rgba(34, 197, 94, 0.2)'
                                        }}
                                    >
                                        Message us on WhatsApp
                                    </Button>
                                </Box>

                                {/* Main Info Card */}
                                <Paper sx={{ p: 4, bgcolor: '#0f172a', borderRadius: '28px', color: '#fff', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
                                    <Typography sx={{ fontWeight: 900, color: '#3b82f6', fontSize: '0.75rem', letterSpacing: 2, mb: 3 }}>HEAD OFFICE</Typography>

                                    <Stack spacing={3}>
                                        <Box sx={{ display: 'flex', gap: 2 }}>
                                            <LocationOnIcon sx={{ color: '#3b82f6' }} />
                                            <Box>
                                                <Typography sx={{ fontWeight: 800, fontSize: '1.1rem' }}>Pratima Security Services</Typography>
                                                <Typography sx={{ color: '#94a3b8', fontSize: '0.9rem' }}>Shop No 2, Shankar Vihar, Near Shiv Mandir, Lalkuan, Ghaziabad</Typography>
                                            </Box>
                                        </Box>

                                        {/* Email CTA */}
                                        <Box component="a" href="mailto:pratimasecurservice@gmail.com" sx={{ display: 'flex', gap: 2, alignItems: 'center', textDecoration: 'none', color: 'inherit', '&:hover': { color: '#3b82f6' } }}>
                                            <EmailIcon sx={{ color: '#3b82f6' }} />
                                            <Typography sx={{ fontWeight: 500 }}>pratimasecurservice@gmail.com</Typography>
                                        </Box>

                                        {/* Call CTA - Separated for individual action */}
                                        <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
                                            <PhoneInTalkIcon sx={{ color: '#3b82f6', mt: 0.3 }} />
                                            <Stack spacing={0.5}>
                                                <Typography
                                                    component="a"
                                                    href="tel:+919818152112"
                                                    sx={{
                                                        fontWeight: 500,
                                                        textDecoration: 'none',
                                                        color: 'inherit',
                                                        display: 'block',
                                                        '&:hover': { color: '#3b82f6' }
                                                    }}
                                                >
                                                    +91 98181 52112
                                                </Typography>

                                                <Typography
                                                    component="a"
                                                    href="tel:+919266395999"
                                                    sx={{
                                                        fontWeight: 500,
                                                        textDecoration: 'none',
                                                        color: 'inherit',
                                                        display: 'block',
                                                        '&:hover': { color: '#3b82f6' }
                                                    }}
                                                >
                                                    +91 9266395999
                                                </Typography>
                                            </Stack>
                                        </Box>
                                    </Stack>
                                </Paper>

                                {/* Branches */}
                                <Box>
                                    <Typography sx={{ fontWeight: 900, fontSize: '0.75rem', color: '#64748b', mb: 2, letterSpacing: 1.5 }}>OUR PRESENCE</Typography>
                                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
                                        {branches.map((city) => (
                                            <Box key={city} sx={{ px: 2, py: 0.8, bgcolor: '#f1f5f9', borderRadius: '10px', display: 'flex', alignItems: 'center', gap: 1, border: '1px solid #e2e8f0' }}>
                                                <LocationOnIcon sx={{ fontSize: 16, color: '#2563eb' }} />
                                                <Typography sx={{ fontSize: '0.85rem', fontWeight: 700, color: '#1e293b' }}>{city}</Typography>
                                            </Box>
                                        ))}
                                    </Box>
                                </Box>

                                {/* Office Hours */}
                                <Box sx={{ p: 4, bgcolor: '#fff', borderRadius: '28px', border: '2px solid #f1f5f9' }}>
                                    <Stack direction="row" spacing={1} sx={{ mb: 3, alignItems: 'center' }}>
                                        <ScheduleIcon sx={{ color: '#2563eb' }} />
                                        <Typography sx={{ fontWeight: 900, fontSize: '0.8rem', letterSpacing: 1.5, color: '#64748b' }}>OFFICE HOURS</Typography>
                                    </Stack>
                                    <Grid container spacing={2}>
                                        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                                            <Grid size={{ xs: 6, sm: 4 }} key={day}>
                                                <Typography sx={{ fontWeight: 800, color: '#0f172a', fontSize: '0.9rem' }}>{day}</Typography>
                                                <Typography sx={{ color: '#64748b', fontSize: '0.8rem' }}>09:00am–07:00pm</Typography>
                                            </Grid>
                                        ))}
                                        <Grid size={{ xs: 6, sm: 4 }}>
                                            <Typography sx={{ fontWeight: 800, color: '#ef4444', fontSize: '0.9rem' }}>Sun</Typography>
                                            <Typography sx={{ color: '#ef4444', fontSize: '0.8rem', fontWeight: 700 }}>CLOSED</Typography>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Stack>

                            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mt: 6 }}>
                                {/* Contact Form Button */}
                                <Button
                                    onClick={() => setOpen(true)}
                                    variant="contained"
                                    startIcon={<EmailIcon />}
                                    sx={{
                                        bgcolor: '#0f172a',
                                        py: 2.2,
                                        px: 8,
                                        borderRadius: '16px',
                                        fontWeight: 900,
                                        fontSize: '1rem',
                                        textTransform: 'none',
                                        '&:hover': { bgcolor: '#2563eb' }
                                    }}
                                >

                                    Drop us a line!
                                </Button>

                                {/* Get Direction Button - Google Maps Link */}
                                <Button
                                    component="a"
                                    // Google Maps Directions link format:
                                    href={`https://www.google.com/maps/dir/?api=1&destination=${position[0]},${position[1]}`}
                                    target="_blank"
                                    startIcon={<LocationOnIcon/>}
                                    rel="noopener noreferrer" // Security ke liye zaroori
                                    variant="contained"
                                    sx={{
                                        bgcolor: '#2563eb',
                                        py: 2.2,
                                        px: 8,
                                        borderRadius: '16px',
                                        fontWeight: 900,
                                        fontSize: '1rem',
                                        textTransform: 'none',
                                        '&:hover': { bgcolor: '#0f172a' }
                                    }}
                                >
                                    Get Direction!
                                </Button>
                            </Stack>
                        </motion.div>
                    </Grid>

                    {/* RIGHT SIDE: Map */}
                    <Grid
                        size={{ xs: 12, lg: 6 }}
                        sx={{
                            position: 'relative',
                            minHeight: { xs: '450px', lg: 'auto' }, // Ensure LG screen has height too
                            height: { lg: '100%' }, // Add this
                            zIndex: 0,
                            overflow: 'hidden'
                        }}
                    >
                        <Box sx={{ position: 'absolute', inset: 0, height: '100%', width: '100%' }}>
                            <DynamicMap position={position} zoom={15} />
                            {/* <DynamicMap /> */}
                        </Box>
                    </Grid>
                </Grid>

                {/* MODAL FORM */}
                <Modal open={open} onClose={() => setOpen(false)} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                    <AnimatePresence mode="wait">
                        {open && (
                            <motion.div
                                initial={{ x: '100%', opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                exit={{ x: '100%', opacity: 0 }}
                                transition={{ type: 'spring', damping: 30, stiffness: 300 }}
                                style={{ height: '100%', width: '100%', maxWidth: '550px' }}
                            >
                                <Paper sx={{ height: '100%', p: { xs: 4, md: 6 }, borderRadius: { xs: 0, md: '40px 0 0 40px' }, position: 'relative', overflowY: 'auto' }}>
                                    <IconButton onClick={() => setOpen(false)} sx={{ position: 'absolute', right: 30, top: 30, bgcolor: '#f1f5f9' }}><CloseIcon /></IconButton>

                                    <Typography variant="h3" sx={{ fontWeight: 900, mb: 1, mt: 4 }}>Let's Talk.</Typography>
                                    <Typography sx={{ color: '#64748b', mb: 6 }}>Fill out the form and our team will get back to you.</Typography>

                                    <Stack spacing={4}>
                                        <TextField fullWidth label="Name*" variant="outlined" sx={inputStyle} />
                                        <TextField fullWidth label="Email*" variant="outlined" sx={inputStyle} />
                                        <TextField fullWidth label="Contact No*" variant="outlined" sx={inputStyle} />
                                        <TextField fullWidth label="Subject*" variant="outlined" sx={inputStyle} />
                                        <TextField fullWidth label="Message*" multiline rows={4} variant="outlined" sx={inputStyle} />

                                        {/* File Upload with Specific Acceptance */}
                                        <Box>
                                            <input
                                                type="file"
                                                id="file-upload"
                                                hidden
                                                onChange={handleFileChange}
                                                accept=".pdf, .doc, .docx, .xls, .xlsx" // Specific filter
                                            />
                                            <label htmlFor="file-upload">
                                                <Button component="span" startIcon={<AttachFileIcon />} sx={{ color: '#2563eb', fontWeight: 700, textTransform: 'none' }}>
                                                    {fileName ? fileName : "Attach Files (PDF, Excel, Doc)"}
                                                </Button>
                                            </label>
                                            <Typography variant="caption" sx={{ display: 'block', ml: 1, color: '#94a3b8' }}>
                                                {fileName ? "1 file attached" : "Attachments (0)"}
                                            </Typography>
                                        </Box>

                                        <FormControlLabel
                                            control={<Checkbox defaultChecked sx={{ color: '#2563eb' }} />}
                                            label={<Typography sx={{ fontSize: '0.85rem', color: '#475569' }}>Sign up for our email list for updates and promotions.</Typography>}
                                        />

                                        <Typography variant="caption" sx={{ color: '#94a3b8', lineHeight: 1.4 }}>
                                            This site is protected by reCAPTCHA and the <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'none' }}>Google Privacy Policy</a> and <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'none' }}>Terms of Service</a> apply.
                                        </Typography>

                                        <Stack direction="row" spacing={2} sx={{ pt: 2, pb: 4 }}>
                                            <Button variant="contained" fullWidth sx={{ py: 2, borderRadius: '15px', bgcolor: '#2563eb', fontWeight: 900 }}>Send Message</Button>
                                            <Button onClick={() => setOpen(false)} variant="outlined" fullWidth sx={{ py: 2, borderRadius: '15px', fontWeight: 700, color: '#64748b', borderColor: '#e2e8f0' }}>Cancel</Button>
                                        </Stack>
                                    </Stack>
                                </Paper>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </Modal>
            </Box>
        </section>

    );
});

export default ContactUsSection;
