import React, { useState, useEffect } from 'react';
import { 
  ThemeProvider, 
  createTheme, 
  CssBaseline, 
  Container, 
  Box, 
  Typography, 
  Button, 
  Card, 
  CardContent, 
  Stack, 
  Chip, 
  Avatar, 
  IconButton,
  Fab,
  Zoom,
  Fade,
  Slide
} from '@mui/material';
import { 
  DarkMode, 
  LightMode, 
  Email, 
  Phone, 
  LocationOn, 
  Work, 
  School, 
  Code, 
  Language,
  GitHub,
  LinkedIn,
  Twitter
} from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';

// 增强的动画样式，包含毛玻璃效果和流星动画
const enhancedAnimationStyles = `
  @keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(180deg); }
  }
  @keyframes pulse-glow {
    0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.3); }
    50% { box-shadow: 0 0 40px rgba(59, 130, 246, 0.6); }
  }
  @keyframes gradient-shift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  @keyframes slide-in-left {
    from { transform: translateX(-100%); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  }
  @keyframes slide-in-right {
    from { transform: translateX(100%); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  }
  @keyframes fade-in-up {
    from { transform: translateY(30px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }
  @keyframes bounce-in {
    0% { transform: scale(0.3); opacity: 0; }
    50% { transform: scale(1.05); }
    70% { transform: scale(0.9); }
    100% { transform: scale(1); opacity: 1; }
  }
  @keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }
  
  /* 新增：高级毛玻璃效果 */
  @keyframes glass-morph {
    0% { 
      backdrop-filter: blur(10px) saturate(180%);
      background: rgba(255, 255, 255, 0.25);
    }
    50% { 
      backdrop-filter: blur(20px) saturate(200%);
      background: rgba(255, 255, 255, 0.35);
    }
    100% { 
      backdrop-filter: blur(10px) saturate(180%);
      background: rgba(255, 255, 255, 0.25);
    }
  }
  
  /* 新增：高级渐变滑动效果 */
  @keyframes advanced-slide {
    0% { 
      transform: translateX(-100%) scale(0.8);
      opacity: 0;
      filter: blur(10px);
    }
    50% {
      transform: translateX(-20%) scale(1.05);
      opacity: 0.8;
      filter: blur(2px);
    }
    100% { 
      transform: translateX(0) scale(1);
      opacity: 1;
      filter: blur(0);
    }
  }
  
  /* 新增：流星动画 */
  @keyframes meteor {
    0% {
      transform: translateX(-300px) translateY(-300px) rotate(45deg);
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    90% {
      opacity: 1;
    }
    100% {
      transform: translateX(300px) translateY(300px) rotate(45deg);
      opacity: 0;
    }
  }
  
  /* 新增：星空闪烁 */
  @keyframes twinkle {
    0%, 100% { opacity: 0.3; transform: scale(1); }
    50% { opacity: 1; transform: scale(1.2); }
  }
  
  /* 新增：极光效果 */
  @keyframes aurora {
    0% { 
      background-position: 0% 50%;
      filter: hue-rotate(0deg);
    }
    25% {
      background-position: 100% 50%;
      filter: hue-rotate(90deg);
    }
    50% {
      background-position: 100% 100%;
      filter: hue-rotate(180deg);
    }
    75% {
      background-position: 0% 100%;
      filter: hue-rotate(270deg);
    }
    100% { 
      background-position: 0% 50%;
      filter: hue-rotate(360deg);
    }
  }
  
  /* 应用动画类 */
  .animate-float { animation: float 6s ease-in-out infinite; }
  .animate-pulse-glow { animation: pulse-glow 2s ease-in-out infinite; }
  .animate-gradient { 
    background: linear-gradient(-45deg, #667eea, #764ba2, #f093fb, #f5576c);
    background-size: 400% 400%;
    animation: gradient-shift 4s ease infinite;
  }
  .animate-slide-in-left { animation: slide-in-left 0.8s ease-out; }
  .animate-slide-in-right { animation: slide-in-right 0.8s ease-out; }
  .animate-fade-in-up { animation: fade-in-up 0.6s ease-out; }
  .animate-bounce-in { animation: bounce-in 0.8s ease-out; }
  
  /* 新增动画类 */
  .glass-morphism {
    backdrop-filter: blur(16px) saturate(180%);
    background: rgba(255, 255, 255, 0.25);
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.125);
    animation: glass-morph 4s ease-in-out infinite;
  }
  
  .dark-mode .glass-morphism {
    background: rgba(17, 25, 40, 0.25);
    border: 1px solid rgba(255, 255, 255, 0.125);
  }
  
  .advanced-slide {
    animation: advanced-slide 1.2s cubic-bezier(0.23, 1, 0.32, 1);
  }
  
  .meteor {
    position: absolute;
    width: 2px;
    height: 2px;
    background: linear-gradient(45deg, #fff, transparent);
    border-radius: 50%;
    box-shadow: 0 0 6px 2px rgba(255, 255, 255, 0.8);
    animation: meteor 3s linear infinite;
  }
  
  .meteor:nth-child(1) { animation-delay: 0s; top: 10%; left: 10%; }
  .meteor:nth-child(2) { animation-delay: 1s; top: 20%; left: 80%; }
  .meteor:nth-child(3) { animation-delay: 2s; top: 50%; left: 60%; }
  .meteor:nth-child(4) { animation-delay: 0.5s; top: 80%; left: 20%; }
  .meteor:nth-child(5) { animation-delay: 1.5s; top: 30%; left: 90%; }
  
  .star {
    position: absolute;
    width: 2px;
    height: 2px;
    background: #fff;
    border-radius: 50%;
    animation: twinkle 2s ease-in-out infinite;
  }
  
  .night-sky {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
    z-index: -1;
    overflow: hidden;
  }
  
  .night-aurora {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 50%;
    background: linear-gradient(45deg, 
      rgba(0, 255, 150, 0.1) 0%,
      rgba(0, 150, 255, 0.1) 25%,
      rgba(150, 0, 255, 0.1) 50%,
      rgba(255, 0, 150, 0.1) 75%,
      rgba(255, 150, 0, 0.1) 100%);
    background-size: 400% 400%;
    animation: aurora 20s ease-in-out infinite;
    filter: blur(1px);
  }
  
  .day-particles {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    overflow: hidden;
  }
  
  .particle {
    position: absolute;
    width: 4px;
    height: 4px;
    background: rgba(255, 255, 255, 0.6);
    border-radius: 50%;
    animation: float 10s linear infinite;
  }
  
  .shimmer-effect {
    position: relative;
    overflow: hidden;
  }
  .shimmer-effect::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
    animation: shimmer 2s infinite;
  }
  .dark-mode .shimmer-effect::before {
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
  }
  .social-link {
    transition: all 0.3s ease;
  }
  .social-link:hover {
    transform: scale(1.1) rotate(10deg);
  }
  .floating-avatar {
    border-radius: 50%;
    box-shadow: 0 10px 30px rgba(0,0,0,0.3);
  }
  .dark-mode .floating-avatar {
    box-shadow: 0 10px 30px rgba(255,255,255,0.1);
  }
`;

interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  bio: string;
  avatar: string;
  socialLinks: {
    douyin: string;
    wechat: string;
    github?: string;
    linkedin?: string;
  };
}

interface Skill {
  name: string;
  level: number;
  category: string;
}

interface Experience {
  title: string;
  company: string;
  duration: string;
  description: string[];
}

interface Education {
  degree: string;
  school: string;
  duration: string;
  description: string;
}

const personalInfo: PersonalInfo = {
  name: "张三",
  title: "前端开发工程师",
  email: "zhangsan@example.com",
  phone: "+86 138 0000 0000",
  location: "北京，中国",
  bio: "热爱技术的前端开发工程师，专注于React生态系统和现代Web技术。拥有丰富的项目经验和团队协作能力。",
  avatar: "/avatar.svg",
  socialLinks: {
    douyin: "https://www.douyin.com/user/your-douyin-id",
    wechat: "https://mp.weixin.qq.com/s/your-wechat-public-account",
    github: "https://github.com/your-github",
    linkedin: "https://linkedin.com/in/your-linkedin"
  }
};

const skills: Skill[] = [
  { name: "React", level: 90, category: "前端框架" },
  { name: "TypeScript", level: 85, category: "编程语言" },
  { name: "JavaScript", level: 95, category: "编程语言" },
  { name: "Node.js", level: 80, category: "后端技术" },
  { name: "Python", level: 75, category: "编程语言" },
  { name: "Material-UI", level: 88, category: "UI框架" },
  { name: "Git", level: 90, category: "工具" },
  { name: "Docker", level: 70, category: "工具" }
];

const experiences: Experience[] = [
  {
    title: "高级前端开发工程师",
    company: "科技有限公司",
    duration: "2022.03 - 至今",
    description: [
      "负责公司核心产品的前端架构设计和开发",
      "带领团队完成多个大型项目的技术攻关",
      "优化应用性能，提升用户体验",
      "参与技术选型和代码规范制定"
    ]
  },
  {
    title: "中级前端开发工程师",
    company: "互联网公司",
    duration: "2020.06 - 2022.02",
    description: [
      "参与多个Web应用的开发和维护",
      "与设计师和后端工程师紧密协作",
      "实现响应式设计和移动端适配",
      "参与代码审查和技术分享"
    ]
  }
];

const education: Education[] = [
  {
    degree: "计算机科学与技术 学士",
    school: "清华大学",
    duration: "2016.09 - 2020.06",
    description: "主修计算机科学与技术，获得学士学位。在校期间积极参与各种编程竞赛和项目实践。"
  }
];

// 星空组件
const NightSky: React.FC = () => {
  const meteors = Array.from({ length: 5 }, (_, i) => i);
  const stars = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    delay: Math.random() * 2,
    duration: 2 + Math.random() * 3
  }));

  return (
    <div className="night-sky">
      <div className="night-aurora" />
      {meteors.map(i => (
        <div key={i} className="meteor" />
      ))}
      {stars.map(star => (
        <div
          key={star.id}
          className="star"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            animationDelay: `${star.delay}s`,
            animationDuration: `${star.duration}s`
          }}
        />
      ))}
    </div>
  );
};

// 白天粒子效果组件
const DayParticles: React.FC = () => {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    delay: Math.random() * 10,
    duration: 10 + Math.random() * 5
  }));

  return (
    <div className="day-particles">
      {particles.map(particle => (
        <div
          key={particle.id}
          className="particle"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`
          }}
        />
      ))}
    </div>
  );
};

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    // 插入增强的动画样式
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = enhancedAnimationStyles;
    document.head.appendChild(styleSheet);

    // 检测系统主题偏好
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(prefersDark);

    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  useEffect(() => {
    // 主题切换时触发动画重载
    setAnimationKey(prev => prev + 1);
  }, [darkMode]);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: darkMode ? '#90caf9' : '#1976d2',
      },
      secondary: {
        main: darkMode ? '#f48fb1' : '#dc004e',
      },
      background: {
        default: darkMode ? '#0a0a0a' : '#f5f5f5',
        paper: darkMode ? 'rgba(17, 25, 40, 0.75)' : 'rgba(255, 255, 255, 0.75)',
      },
    },
    typography: {
      fontFamily: '"Roboto", "Helvetica", "Arial", "Noto Sans SC", sans-serif',
    },
    components: {
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 16,
            backdropFilter: 'blur(16px) saturate(180%)',
            backgroundColor: darkMode 
              ? 'rgba(17, 25, 40, 0.25)' 
              : 'rgba(255, 255, 255, 0.25)',
            border: `1px solid ${darkMode ? 'rgba(255, 255, 255, 0.125)' : 'rgba(255, 255, 255, 0.125)'}`,
            boxShadow: darkMode 
              ? '0 8px 32px rgba(0,0,0,0.5)' 
              : '0 8px 32px rgba(0,0,0,0.1)',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            '&:hover': {
              transform: 'translateY(-8px) scale(1.02)',
              boxShadow: darkMode 
                ? '0 20px 60px rgba(0,0,0,0.7)' 
                : '0 20px 60px rgba(0,0,0,0.15)',
            },
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 25,
            textTransform: 'none',
            fontWeight: 600,
            backdropFilter: 'blur(10px)',
            '&:hover': {
              transform: 'scale(1.05)',
              boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
            },
          },
        },
      },
    },
  });

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const openSocialLink = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className={darkMode ? 'dark-mode' : 'light-mode'}>
        {/* 背景特效 */}
        {darkMode ? <NightSky /> : <DayParticles />}
        
        <Box sx={{ minHeight: '100vh', position: 'relative', zIndex: 1 }}>
          {/* 主题切换按钮 */}
          <Fab
            color="primary"
            aria-label="toggle theme"
            sx={{
              position: 'fixed',
              top: 20,
              right: 20,
              zIndex: 1000,
              backdropFilter: 'blur(10px)',
            }}
            onClick={toggleTheme}
            className="animate-pulse-glow"
          >
            {darkMode ? <LightMode /> : <DarkMode />}
          </Fab>

          <Container maxWidth="lg" sx={{ py: 4 }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={animationKey}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                {/* 个人信息头部 */}
                <Card sx={{ mb: 4, overflow: 'visible' }} className="glass-morphism shimmer-effect">
                  <CardContent sx={{ p: 4 }}>
                    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4, alignItems: 'center' }}>
                      <Box sx={{ textAlign: 'center', width: { xs: '100%', md: 'auto' } }}>
                        <motion.div
                          className="animate-float"
                          whileHover={{ scale: 1.05, rotate: 5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <Avatar
                            src={personalInfo.avatar}
                            alt={personalInfo.name}
                            sx={{ 
                              width: 150, 
                              height: 150, 
                              mx: 'auto',
                              mb: 2,
                            }}
                            className="floating-avatar"
                          />
                        </motion.div>
                      </Box>
                      <Box sx={{ flex: 1 }}>
                        <motion.div
                          className="advanced-slide"
                          initial={{ x: -50, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.2, duration: 0.6 }}
                        >
                          <Typography variant="h3" component="h1" gutterBottom className="animate-gradient">
                            {personalInfo.name}
                          </Typography>
                          <Typography variant="h5" color="primary" gutterBottom>
                            {personalInfo.title}
                          </Typography>
                          <Typography variant="body1" color="text.secondary" paragraph>
                            {personalInfo.bio}
                          </Typography>
                          
                          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 3 }}>
                            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                              <Chip icon={<Email />} label={personalInfo.email} />
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                              <Chip icon={<Phone />} label={personalInfo.phone} />
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                              <Chip icon={<LocationOn />} label={personalInfo.location} />
                            </motion.div>
                          </Box>

                          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                            <motion.div whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.95 }}>
                              <Button
                                variant="contained"
                                color="secondary"
                                onClick={() => openSocialLink(personalInfo.socialLinks.douyin)}
                                className="social-link"
                                sx={{ borderRadius: 3 }}
                              >
                                抖音主页
                              </Button>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.95 }}>
                              <Button
                                variant="outlined"
                                color="primary"
                                onClick={() => openSocialLink(personalInfo.socialLinks.wechat)}
                                className="social-link"
                                sx={{ borderRadius: 3 }}
                              >
                                微信公众号
                              </Button>
                            </motion.div>
                            {personalInfo.socialLinks.github && (
                              <motion.div whileHover={{ scale: 1.2, rotate: 10 }} whileTap={{ scale: 0.9 }}>
                                <IconButton
                                  onClick={() => openSocialLink(personalInfo.socialLinks.github!)}
                                  className="social-link"
                                >
                                  <GitHub />
                                </IconButton>
                              </motion.div>
                            )}
                            {personalInfo.socialLinks.linkedin && (
                              <motion.div whileHover={{ scale: 1.2, rotate: -10 }} whileTap={{ scale: 0.9 }}>
                                <IconButton
                                  onClick={() => openSocialLink(personalInfo.socialLinks.linkedin!)}
                                  className="social-link"
                                >
                                  <LinkedIn />
                                </IconButton>
                              </motion.div>
                            )}
                          </Box>
                        </motion.div>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                  <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
                    {/* 技能部分 */}
                    <Box sx={{ flex: 1 }}>
                      <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                      >
                        <Card className="glass-morphism advanced-slide">
                          <CardContent sx={{ p: 3 }}>
                            <Typography variant="h5" component="h2" gutterBottom>
                              <Code sx={{ mr: 1, verticalAlign: 'middle' }} />
                              专业技能
                            </Typography>
                            <Box sx={{ mt: 2 }}>
                              {skills.map((skill, index) => (
                                <motion.div
                                  key={skill.name}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: 0.1 * index, duration: 0.4 }}
                                  whileHover={{ scale: 1.02, x: 10 }}
                                >
                                  <Box sx={{ mb: 2 }}>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                                      <Typography variant="body2" fontWeight="medium">
                                        {skill.name}
                                      </Typography>
                                      <Typography variant="body2" color="text.secondary">
                                        {skill.level}%
                                      </Typography>
                                    </Box>
                                    <Box
                                      sx={{
                                        width: '100%',
                                        height: 8,
                                        backgroundColor: 'action.hover',
                                        borderRadius: 4,
                                        overflow: 'hidden',
                                        position: 'relative',
                                      }}
                                    >
                                      <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: `${skill.level}%` }}
                                        transition={{ delay: 0.2 * index, duration: 1, ease: "easeOut" }}
                                        style={{
                                          height: '100%',
                                          background: darkMode 
                                            ? 'linear-gradient(90deg, #90caf9, #f48fb1)'
                                            : 'linear-gradient(90deg, #1976d2, #dc004e)',
                                          borderRadius: 4,
                                          position: 'relative',
                                          overflow: 'hidden',
                                        }}
                                      >
                                        <div
                                          style={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            width: '100%',
                                            height: '100%',
                                            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                                            animation: 'shimmer 2s infinite',
                                          }}
                                        />
                                      </motion.div>
                                    </Box>
                                  </Box>
                                </motion.div>
                              ))}
                            </Box>
                          </CardContent>
                        </Card>
                      </motion.div>
                    </Box>

                    {/* 工作经历 */}
                    <Box sx={{ flex: 1 }}>
                      <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                      >
                        <Card className="glass-morphism advanced-slide">
                          <CardContent sx={{ p: 3 }}>
                            <Typography variant="h5" component="h2" gutterBottom>
                              <Work sx={{ mr: 1, verticalAlign: 'middle' }} />
                              工作经历
                            </Typography>
                            <Box sx={{ mt: 2 }}>
                              {experiences.map((exp, index) => (
                                <motion.div
                                  key={index}
                                  initial={{ opacity: 0, y: 20 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: 0.2 * index, duration: 0.5 }}
                                  whileHover={{ scale: 1.02, x: 5 }}
                                >
                                  <Box sx={{ mb: 3, pb: 3, borderBottom: index < experiences.length - 1 ? '1px solid' : 'none', borderColor: 'divider' }}>
                                    <Typography variant="h6" component="h3" gutterBottom>
                                      {exp.title}
                                    </Typography>
                                    <Typography variant="subtitle1" color="primary" gutterBottom>
                                      {exp.company}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" gutterBottom>
                                      {exp.duration}
                                    </Typography>
                                    <Box component="ul" sx={{ mt: 1, pl: 2 }}>
                                      {exp.description.map((desc, descIndex) => (
                                        <Typography key={descIndex} component="li" variant="body2" sx={{ mb: 0.5 }}>
                                          {desc}
                                        </Typography>
                                      ))}
                                    </Box>
                                  </Box>
                                </motion.div>
                              ))}
                            </Box>
                          </CardContent>
                        </Card>
                      </motion.div>
                    </Box>
                  </Box>

                  {/* 教育背景 */}
                  <Box>
                    <motion.div
                      initial={{ y: 50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.6, duration: 0.6 }}
                    >
                      <Card className="glass-morphism animate-fade-in-up">
                        <CardContent sx={{ p: 3 }}>
                          <Typography variant="h5" component="h2" gutterBottom>
                            <School sx={{ mr: 1, verticalAlign: 'middle' }} />
                            教育背景
                          </Typography>
                          <Box sx={{ mt: 2 }}>
                            {education.map((edu, index) => (
                              <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.2 * index, duration: 0.5 }}
                                whileHover={{ scale: 1.02, y: -2 }}
                              >
                                <Box sx={{ mb: 2 }}>
                                  <Typography variant="h6" component="h3" gutterBottom>
                                    {edu.degree}
                                  </Typography>
                                  <Typography variant="subtitle1" color="primary" gutterBottom>
                                    {edu.school}
                                  </Typography>
                                  <Typography variant="body2" color="text.secondary" gutterBottom>
                                    {edu.duration}
                                  </Typography>
                                  <Typography variant="body2">
                                    {edu.description}
                                  </Typography>
                                </Box>
                              </motion.div>
                            ))}
                          </Box>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </Box>
                </Box>
              </motion.div>
            </AnimatePresence>
          </Container>
        </Box>
      </div>
    </ThemeProvider>
  );
}

export default App;
