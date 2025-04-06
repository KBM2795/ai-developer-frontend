import React, { useState, useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from '../config/axios';
import { UserContext } from '../context/user.context';
import { motion } from "framer-motion";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/users/login',{
      email,
      password
    }).then((res)=>{
      console.log(res.data.user);
      localStorage.setItem('token',res.data.token);
      setUser(res.data.user);
      
      navigate('/');
    }).catch((err) => {
      console.log(err.response.data);
    });
  };

  return (
    <motion.div 
      className="min-h-screen flex flex-col items-center justify-center"
      style={{ 
        background: "linear-gradient(135deg, #0a0a0a 0%, #121212 100%)",
        backgroundSize: "400% 400%",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Abstract background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute rounded-full w-64 h-64 bg-gray-800/20 blur-3xl" 
          style={{ top: '15%', right: '10%' }}
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.4, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.div 
          className="absolute rounded-full w-96 h-96 bg-gray-700/15 blur-3xl" 
          style={{ bottom: '10%', left: '5%' }}
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.div 
          className="absolute rounded-full w-64 h-64 bg-gray-600/10 blur-3xl" 
          style={{ top: '40%', left: '20%' }}
          animate={{ 
            scale: [1, 1.15, 1],
            opacity: [0.15, 0.25, 0.15]
          }}
          transition={{ duration: 7, repeat: Infinity, repeatType: "reverse" }}
        />
      </div>
      
      <div className="w-full max-w-md px-8 pt-6 pb-8 relative z-10">
        <div className="text-center mb-8">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1
              className="text-6xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-emerald-400"
              animate={{ 
                textShadow: ["0 0 5px rgba(16, 185, 129, 0.3)", "0 0 10px rgba(16, 185, 129, 0.5)", "0 0 5px rgba(16, 185, 129, 0.3)"] 
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              AI Developer
            </motion.h1>
            <motion.p
              className="text-lg text-gray-400 mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              [Collaborative Platform]
            </motion.p>
            <motion.p 
              className="text-gray-300 text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              Sign in to your account
            </motion.p>
          </motion.div>
        </div>

        <motion.div 
          className="backdrop-blur-md bg-black/50 p-8 rounded-2xl shadow-2xl border border-gray-800/70"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label className="block text-gray-400 mb-2 text-sm font-medium" htmlFor="email">Email</label>
              <motion.div
                animate={emailFocused ? { scale: 1.02 } : { scale: 1 }}
                transition={{ duration: 0.2 }}
              >
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 rounded-lg bg-gray-900/80 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 border border-gray-700/50 transition-all duration-200"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setEmailFocused(true)}
                  onBlur={() => setEmailFocused(false)}
                  required
                  placeholder="Enter your email"
                />
              </motion.div>
            </div>
            <div className="mb-6">
              <label className="block text-gray-400 mb-2 text-sm font-medium" htmlFor="password">Password</label>
              <motion.div
                animate={passwordFocused ? { scale: 1.02 } : { scale: 1 }}
                transition={{ duration: 0.2 }}
              >
                <input
                  type="password"
                  id="password"
                  className="w-full p-3 rounded-lg bg-gray-900/80 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 border border-gray-700/50 transition-all duration-200"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onFocus={() => setPasswordFocused(true)}
                  onBlur={() => setPasswordFocused(false)}
                  required
                  placeholder="••••••••"
                />
              </motion.div>
            </div>
            <motion.button
              type="submit"
              className="w-full bg-gradient-to-r from-gray-800 to-emerald-900 text-white py-3 px-4 rounded-lg font-medium shadow-lg hover:from-gray-900 hover:to-emerald-800 transition duration-300"
              whileHover={{ scale: 1.03, boxShadow: "0 0 15px rgba(16, 185, 129, 0.3)" }}
              whileTap={{ scale: 0.98 }}
            >
              Sign In
            </motion.button>
          </form>
          <motion.p 
            className="text-sm text-gray-400 mt-6 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            Don't have an account? <Link to="/register" className="text-emerald-400 hover:text-emerald-300 font-medium transition duration-200">Create one</Link>
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Login;