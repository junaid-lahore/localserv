import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { motion, AnimatePresence } from "framer-motion";
import brain from "brain";
import { toast } from "sonner";

interface Props {}

export function WaitlistForm({}: Props) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [userType, setUserType] = useState<"consumer" | "business" | "">("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [industry, setIndustry] = useState("");
  const [serviceQuery, setServiceQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Basic validation state (can be expanded)
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!fullName.trim()) newErrors.fullName = "Full name is required.";
    if (!email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid.";
    }
    if (!userType) newErrors.userType = "Please select a user type.";
    if (!city.trim()) newErrors.city = "City is required.";
    if (!state.trim()) newErrors.state = "State is required.";

    if (userType === "business" && !industry.trim()) {
      newErrors.industry = "Industry is required for businesses.";
    }
    if (userType === "consumer" && !serviceQuery.trim()) {
      newErrors.serviceQuery = "Please describe the service you're looking for.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    const submissionData = {
      fullName,
      email,
      userType: userType as 'consumer' | 'business',
      city,
      state,
      industry: userType === "business" ? industry : undefined,
      serviceInterest: userType === "consumer" ? serviceQuery : undefined,
    };

    try {
      // @ts-ignore
      const response = await brain.subscribe_to_waitlist(submissionData);
      
      // Show success state
      setIsSuccess(true);
      toast.success("Successfully joined the waitlist!");
      
      // Reset form fields after a delay
      setTimeout(() => {
        setFullName("");
        setEmail("");
        setUserType("");
        setCity("");
        setState("");
        setIndustry("");
        setServiceQuery("");
        setErrors({});
        setIsSuccess(false);
      }, 3000);
    } catch (error) {
      console.error("Failed to submit waitlist form:", error);
      let errorMessage = "Submission failed. Please try again.";
      
      if (error && typeof error === 'object' && 'message' in error && typeof error.message === 'string') {
        errorMessage = error.message;
      } else if (error && typeof error === 'object' && 'detail' in error && typeof error.detail === 'string') {
        errorMessage = error.detail;
      } else if (typeof error === 'string') {
        errorMessage = error;
      }
      
      // @ts-ignore
      if (error.response && error.response.data && error.response.data.detail) {
        // @ts-ignore
        errorMessage = error.response.data.detail;
      }

      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  const buttonVariants = {
    idle: { scale: 1 },
    hover: { scale: 1.02 },
    tap: { scale: 0.98 }
  };

  const successVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20
      }
    }
  };

  if (isSuccess) {
    return (
      <motion.div
        variants={successVariants}
        initial="hidden"
        animate="visible"
        className="p-12 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl shadow-xl border border-green-200 max-w-2xl mx-auto text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6"
        >
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </motion.div>
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-2xl font-bold text-green-800 mb-3"
        >
          Welcome to the Waitlist!
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-green-700 text-lg"
        >
          You'll be among the first to know when Local Serv launches!
        </motion.p>
      </motion.div>
    );
  }

  return (
    <motion.form
      id="join-waitlist"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      onSubmit={handleSubmit}
      className="space-y-6 p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-slate-100 max-w-2xl mx-auto relative overflow-hidden"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-purple-50/30 animate-pulse" />
      
      <motion.div variants={itemVariants} className="space-y-2 relative z-10">
        <Label htmlFor="fullName" className="text-base font-medium text-slate-700">Full Name</Label>
        <motion.div
          whileFocus={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Input
            id="fullName"
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="e.g., Jane Doe"
            className="rounded-lg border-slate-300 focus:border-primary focus:ring-primary transition-all duration-300 hover:border-slate-400"
            required
          />
        </motion.div>
        {errors.fullName && (
          <motion.p
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-sm text-red-600"
          >
            {errors.fullName}
          </motion.p>
        )}
      </motion.div>

      <motion.div variants={itemVariants} className="space-y-2 relative z-10">
        <Label htmlFor="email" className="text-base font-medium text-slate-700">Email Address</Label>
        <motion.div
          whileFocus={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="e.g., jane.doe@example.com"
            className="rounded-lg border-slate-300 focus:border-primary focus:ring-primary transition-all duration-300 hover:border-slate-400"
            required
          />
        </motion.div>
        {errors.email && (
          <motion.p
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-sm text-red-600"
          >
            {errors.email}
          </motion.p>
        )}
      </motion.div>

      <motion.div variants={itemVariants} className="space-y-2 relative z-10">
        <Label className="text-base font-medium text-slate-700">I am a...</Label>
        <RadioGroup
          value={userType}
          onValueChange={(value: "consumer" | "business" | "") => setUserType(value)}
          className="flex flex-col sm:flex-row gap-4 pt-1"
        >
          <motion.div
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center space-x-2 p-4 border-2 border-slate-300 rounded-lg flex-1 hover:border-primary transition-all duration-300 cursor-pointer bg-white/50 hover:bg-white/80"
          >
            <RadioGroupItem value="consumer" id="consumer" className="text-primary focus:ring-primary" />
            <Label htmlFor="consumer" className="font-normal text-slate-700 cursor-pointer">Consumer / Service Seeker</Label>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center space-x-2 p-4 border-2 border-slate-300 rounded-lg flex-1 hover:border-secondary transition-all duration-300 cursor-pointer bg-white/50 hover:bg-white/80"
          >
            <RadioGroupItem value="business" id="business" className="text-secondary focus:ring-secondary" />
            <Label htmlFor="business" className="font-normal text-slate-700 cursor-pointer">Business / Service Provider</Label>
          </motion.div>
        </RadioGroup>
        {errors.userType && (
          <motion.p
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-sm text-red-600"
          >
            {errors.userType}
          </motion.p>
        )}
      </motion.div>

      <AnimatePresence mode="wait">
        {userType === "consumer" && (
          <motion.div
            key="consumer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-2 pt-2 relative z-10"
          >
            <Label htmlFor="serviceQuery" className="text-base font-medium text-slate-700">What type of service are you looking for?</Label>
            <motion.div
              whileFocus={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Textarea
                id="serviceQuery"
                value={serviceQuery}
                onChange={(e) => setServiceQuery(e.target.value)}
                placeholder="e.g., 'I need a reliable plumber for a kitchen sink repair.' or 'Looking for weekly house cleaning services.'"
                className="rounded-lg border-slate-300 focus:border-primary focus:ring-primary min-h-[100px] transition-all duration-300 hover:border-slate-400"
                required={userType === "consumer"}
              />
            </motion.div>
            {errors.serviceQuery && (
              <motion.p
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-sm text-red-600"
              >
                {errors.serviceQuery}
              </motion.p>
            )}
          </motion.div>
        )}

        {userType === "business" && (
          <motion.div
            key="business"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-2 pt-2 relative z-10"
          >
            <Label htmlFor="industry" className="text-base font-medium text-slate-700">Industry</Label>
            <motion.div
              whileFocus={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Input
                id="industry"
                type="text"
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
                placeholder="e.g., Auto Detailing, Landscaping, Tutoring"
                className="rounded-lg border-slate-300 focus:border-secondary focus:ring-secondary transition-all duration-300 hover:border-slate-400"
                required={userType === "business"}
              />
            </motion.div>
            {errors.industry && (
              <motion.p
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-sm text-red-600"
              >
                {errors.industry}
              </motion.p>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2 relative z-10">
        <div className="space-y-2">
          <Label htmlFor="city" className="text-base font-medium text-slate-700">City</Label>
          <motion.div
            whileFocus={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Input
              id="city"
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="e.g., San Francisco"
              className="rounded-lg border-slate-300 focus:border-primary focus:ring-primary transition-all duration-300 hover:border-slate-400"
              required
            />
          </motion.div>
          {errors.city && (
            <motion.p
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-sm text-red-600"
            >
              {errors.city}
            </motion.p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="state" className="text-base font-medium text-slate-700">State</Label>
          <motion.div
            whileFocus={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Input
              id="state"
              type="text"
              value={state}
              onChange={(e) => setState(e.target.value)}
              placeholder="e.g., CA"
              className="rounded-lg border-slate-300 focus:border-primary focus:ring-primary transition-all duration-300 hover:border-slate-400"
              required
            />
          </motion.div>
          {errors.state && (
            <motion.p
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-sm text-red-600"
            >
              {errors.state}
            </motion.p>
          )}
        </div>
      </motion.div>

      <motion.div variants={itemVariants} className="pt-4 relative z-10">
        <motion.div
          variants={buttonVariants}
          initial="idle"
          whileHover="hover"
          whileTap="tap"
        >
          <Button
            type="submit"
            size="lg"
            className="w-full rounded-full py-3 text-lg font-semibold bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-700 transition-all duration-300 btn-shadow relative overflow-hidden group"
            disabled={isLoading}
          >
            {/* Animated background shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            
            <AnimatePresence mode="wait">
              {isLoading ? (
                <motion.div
                  key="loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-2"
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                  />
                  Submitting...
                </motion.div>
              ) : (
                <motion.span
                  key="submit"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  Join Waitlist
                </motion.span>
              )}
            </AnimatePresence>
          </Button>
        </motion.div>
      </motion.div>

      <motion.p
        variants={itemVariants}
        className="text-xs text-slate-500 text-center pt-2 relative z-10"
      >
        By joining, you agree to our Terms of Service and Privacy Policy.
      </motion.p>
    </motion.form>
  );
}
