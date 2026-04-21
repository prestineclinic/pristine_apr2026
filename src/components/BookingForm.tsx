import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Calendar, Clock, User, Phone, Mail, MessageSquare, Loader2, CheckCircle2, Activity } from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

const bookingSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Invalid phone number'),
  service: z.string().min(1, 'Please select a service'),
  date: z.string().min(1, 'Please select a date'),
  time: z.string().min(1, 'Please select a time'),
  message: z.string().optional(),
});

type BookingFormData = z.infer<typeof bookingSchema>;

export const BookingForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [submitError, setSubmitError] = React.useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
  });

  const onSubmit = async (data: BookingFormData) => {
    setIsSubmitting(true);
    setSubmitError('');
    try {
      const response = await fetch('https://formspree.io/f/meolvqnv', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone,
          service: data.service,
          date: data.date,
          time: data.time,
          message: data.message || 'No additional notes',
        }),
      });
      if (response.ok) {
        setIsSuccess(true);
        reset();
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        setSubmitError('Something went wrong. Please try again or call us at +91 6364 635 943.');
      }
    } catch {
      setSubmitError('Network error. Please try again or call us at +91 6364 635 943.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-panel p-12 rounded-3xl text-center space-y-6"
      >
        <div className="bg-green-100 text-green-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle2 size={48} />
        </div>
        <h3 className="text-2xl font-display font-bold text-slate-900">Booking Confirmed!</h3>
        <p className="text-slate-600 max-w-sm mx-auto">
          Thank you for choosing Pristine Clinic. We've received your request and will contact you shortly to confirm your appointment.
        </p>
        <button 
          onClick={() => setIsSuccess(false)}
          className="text-primary font-semibold hover:underline"
        >
          Book another appointment
        </button>
      </motion.div>
    );
  }

  return (
    <form 
      onSubmit={handleSubmit(onSubmit)}
      className="glass-panel p-8 md:p-10 rounded-3xl space-y-6 shadow-2xl relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-2 bg-primary" />
      
      <div className="space-y-2">
        <h3 className="text-2xl font-display font-bold text-slate-900">Book Your Session</h3>
        <p className="text-sm text-slate-500">Fill in the details below and we'll get back to you.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name */}
        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-2">
            <User size={14} className="text-primary" /> Full Name
          </label>
          <input
            {...register('name')}
            className={cn(
              "w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary outline-none transition-all",
              errors.name && "border-red-500 focus:ring-red-500"
            )}
            placeholder="Enter your full name"
          />
          {errors.name && <p className="text-xs text-red-500">{errors.name.message}</p>}
        </div>

        {/* Email */}
        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-2">
            <Mail size={14} className="text-primary" /> Email Address
          </label>
          <input
            {...register('email')}
            type="email"
            className={cn(
              "w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary outline-none transition-all",
              errors.email && "border-red-500 focus:ring-red-500"
            )}
            placeholder="Enter your email"
          />
          {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}
        </div>

        {/* Phone */}
        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-2">
            <Phone size={14} className="text-primary" /> Phone Number
          </label>
          <input
            {...register('phone')}
            className={cn(
              "w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary outline-none transition-all",
              errors.phone && "border-red-500 focus:ring-red-500"
            )}
            placeholder="+91 XXXXX XXXXX"
          />
          {errors.phone && <p className="text-xs text-red-500">{errors.phone.message}</p>}
        </div>

        {/* Service */}
        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-2">
            <Activity size={14} className="text-primary" /> Service
          </label>
          <select
            {...register('service')}
            className={cn(
              "w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary outline-none transition-all appearance-none",
              errors.service && "border-red-500 focus:ring-red-500"
            )}
          >
            <option value="">Select a service</option>
            <option value="physiotherapy">Physiotherapy</option>
            <option value="osteopathy">Osteopathy</option>
            <option value="neuro-rehab">Neuro & Pediatric Rehab</option>
            <option value="pnf">PNF Therapy</option>
            <option value="pilates">Pilates</option>
          </select>
          {errors.service && <p className="text-xs text-red-500">{errors.service.message}</p>}
        </div>

        {/* Date */}
        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-2">
            <Calendar size={14} className="text-primary" /> Preferred Date
          </label>
          <input
            {...register('date')}
            type="date"
            className={cn(
              "w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary outline-none transition-all",
              errors.date && "border-red-500 focus:ring-red-500"
            )}
          />
          {errors.date && <p className="text-xs text-red-500">{errors.date.message}</p>}
        </div>

        {/* Time */}
        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-2">
            <Clock size={14} className="text-primary" /> Preferred Time
          </label>
          <select
            {...register('time')}
            className={cn(
              "w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary outline-none transition-all appearance-none",
              errors.time && "border-red-500 focus:ring-red-500"
            )}
          >
            <option value="">Select a time</option>
            <option value="10:00">10:00 AM</option>
            <option value="10:30">10:30 AM</option>
            <option value="11:00">11:00 AM</option>
            <option value="11:30">11:30 AM</option>
            <option value="12:00">12:00 PM</option>
            <option value="12:30">12:30 PM</option>
            <option value="13:00">01:00 PM</option>
            <option value="13:30">01:30 PM</option>
            <option value="14:00">02:00 PM</option>
            <option value="14:30">02:30 PM</option>
            <option value="15:00">03:00 PM</option>
            <option value="15:30">03:30 PM</option>
            <option value="16:00">04:00 PM</option>
            <option value="16:30">04:30 PM</option>
            <option value="17:00">05:00 PM</option>
            <option value="17:30">05:30 PM</option>
            <option value="18:00">06:00 PM</option>
            <option value="18:30">06:30 PM</option>
            <option value="19:00">07:00 PM</option>
            <option value="19:30">07:30 PM</option>
            <option value="20:00">08:00 PM</option>
            <option value="20:30">08:30 PM</option>
          </select>
          {errors.time && <p className="text-xs text-red-500">{errors.time.message}</p>}
        </div>
      </div>

      {/* Message */}
      <div className="space-y-2">
        <label className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-2">
          <MessageSquare size={14} className="text-primary" /> Additional Notes
        </label>
        <textarea
          {...register('message')}
          rows={3}
          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary outline-none transition-all resize-none"
          placeholder="Tell us about your condition..."
        />
      </div>

      {submitError && (
        <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3">{submitError}</p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary text-white py-4 rounded-2xl font-bold text-lg hover:bg-primary-dark transition-all shadow-lg hover:shadow-xl active:scale-[0.98] flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <>
            <Loader2 size={20} className="animate-spin" />
            Processing...
          </>
        ) : (
          'Confirm Appointment'
        )}
      </button>
    </form>
  );
};
