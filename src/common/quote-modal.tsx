// 'use client';

// import { X } from 'lucide-react';
// import { useState } from 'react';
// import Button from '@/components/ui/button';

// type QuoteModalProps = {
//   isOpen: boolean;
//   onClose: () => void;
// };

// export default function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
//   const [step, setStep] = useState(1);
//   const [formData, setFormData] = useState({
//     name: '',
//     surname: '',
//     email: '',
//     phone: '',
//     country: '',
//     city: '',
//     address: '',
//     zipCode: '',
//     service: '',
//     message: '',
//   });

//   const services = [
//     'Power Generation',
//     'Earthing & LPS',
//     'Industrial Electrification',
//     'Cable Laying',
//     'Control Panels',
//     'Transformer Installation',
//     'Lighting Systems',
//     'Maintenance',
//     'Telecom Towers',
//     'Solar Systems',
//   ];

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleNext = () => {
//     if (step < 3) {
//       setStep(step + 1);
//     } else {
//       console.log('Form submitted:', formData);
//       alert('Quote request submitted successfully!');
//       onClose();
//     }
//   };

//   const handlePrevious = () => {
//     if (step > 1) {
//       setStep(step - 1);
//     }
//   };

//   if (!isOpen) {
//     return null;
//   }

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
//       <div className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto bg-white shadow-2xl">
//         <button
//           onClick={onClose}
//           className="absolute top-4 right-4 z-10 text-gray-500 hover:text-gray-800"
//           aria-label="Close modal"
//         >
//           <X size={24} />
//         </button>

//         <div className="bg-primary p-6 text-white">
//           <h2 className="text-2xl font-bold md:text-3xl">Get a Complete Quote</h2>
//           <p className="mt-2 text-sm opacity-90">
//             Fill out the form below and we'll get back to you within 24 hours
//           </p>
//         </div>

//         <div className="bg-gray-50 p-6">
//           <div className="flex items-center justify-center space-x-8">
//             {[1, 2, 3].map(num => (
//               <div key={num} className="flex flex-col items-center">
//                 <div className={`flex h-10 w-10 items-center justify-center rounded-full border-2 ${step >= num ? 'border-primary bg-primary text-white' : 'border-gray-300 text-gray-500'}`}>
//                   {num}
//                 </div>
//                 <span className="mt-2 text-sm font-medium">
//                   {num === 1 && 'Personal Info'}
//                   {num === 2 && 'Service Details'}
//                   {num === 3 && 'Review & Submit'}
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="p-6 md:p-8">
//           {step === 1 && (
//             <div className="space-y-6">
//               <h3 className="text-xl font-semibold text-gray-800">Personal Information</h3>
//               <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
//                 <div>
//                   <label className="mb-1 block text-sm font-medium text-gray-700">
//                     First Name
//                     {' '}
//                     <span className="text-red-500">*</span>
//                   </label>
//                   <input
//                     type="text"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     className="w-full rounded border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-primary focus:outline-none"
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label className="mb-1 block text-sm font-medium text-gray-700">
//                     Last Name
//                     {' '}
//                     <span className="text-red-500">*</span>
//                   </label>
//                   <input
//                     type="text"
//                     name="surname"
//                     value={formData.surname}
//                     onChange={handleChange}
//                     className="w-full rounded border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-primary focus:outline-none"
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label className="mb-1 block text-sm font-medium text-gray-700">
//                     Email
//                     {' '}
//                     <span className="text-red-500">*</span>
//                   </label>
//                   <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     className="w-full rounded border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-primary focus:outline-none"
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label className="mb-1 block text-sm font-medium text-gray-700">
//                     Phone Number
//                     {' '}
//                     <span className="text-red-500">*</span>
//                   </label>
//                   <input
//                     type="tel"
//                     name="phone"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     className="w-full rounded border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-primary focus:outline-none"
//                     required
//                   />
//                 </div>
//               </div>
//             </div>
//           )}

//           {step === 2 && (
//             <div className="space-y-6">
//               <h3 className="text-xl font-semibold text-gray-800">Service Details</h3>
//               <div>
//                 <label className="mb-1 block text-sm font-medium text-gray-700">
//                   Select Service
//                   {' '}
//                   <span className="text-red-500">*</span>
//                 </label>
//                 <select
//                   name="service"
//                   value={formData.service}
//                   onChange={handleChange}
//                   className="w-full rounded border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-primary focus:outline-none"
//                   required
//                 >
//                   <option value="">Select a service</option>
//                   {services.map(service => (
//                     <option key={service} value={service}>{service}</option>
//                   ))}
//                 </select>
//               </div>
//               <div>
//                 <label className="mb-1 block text-sm font-medium text-gray-700">
//                   Project Description
//                 </label>
//                 <textarea
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   rows={4}
//                   className="w-full rounded border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-primary focus:outline-none"
//                   placeholder="Please describe your project requirements..."
//                 />
//               </div>
//             </div>
//           )}

//           {step === 3 && (
//             <div className="space-y-6">
//               <h3 className="text-xl font-semibold text-gray-800">Location Details</h3>
//               <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
//                 <div>
//                   <label className="mb-1 block text-sm font-medium text-gray-700">Country</label>
//                   <input
//                     type="text"
//                     name="country"
//                     value={formData.country}
//                     onChange={handleChange}
//                     className="w-full rounded border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-primary focus:outline-none"
//                   />
//                 </div>
//                 <div>
//                   <label className="mb-1 block text-sm font-medium text-gray-700">City</label>
//                   <input
//                     type="text"
//                     name="city"
//                     value={formData.city}
//                     onChange={handleChange}
//                     className="w-full rounded border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-primary focus:outline-none"
//                   />
//                 </div>
//                 <div className="md:col-span-2">
//                   <label className="mb-1 block text-sm font-medium text-gray-700">Address</label>
//                   <input
//                     type="text"
//                     name="address"
//                     value={formData.address}
//                     onChange={handleChange}
//                     className="w-full rounded border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-primary focus:outline-none"
//                   />
//                 </div>
//                 <div>
//                   <label className="mb-1 block text-sm font-medium text-gray-700">Zip Code</label>
//                   <input
//                     type="text"
//                     name="zipCode"
//                     value={formData.zipCode}
//                     onChange={handleChange}
//                     className="w-full rounded border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-primary focus:outline-none"
//                   />
//                 </div>
//               </div>

//               <div className="mt-8 rounded-lg border border-gray-200 p-4">
//                 <h4 className="mb-3 font-semibold text-gray-800">Review Your Information</h4>
//                 <div className="space-y-2 text-sm">
//                   <p>
//                     <span className="font-medium">Name:</span>
//                     {' '}
//                     {formData.name}
//                     {' '}
//                     {formData.surname}
//                   </p>
//                   <p>
//                     <span className="font-medium">Email:</span>
//                     {' '}
//                     {formData.email}
//                   </p>
//                   <p>
//                     <span className="font-medium">Phone:</span>
//                     {' '}
//                     {formData.phone}
//                   </p>
//                   <p>
//                     <span className="font-medium">Service:</span>
//                     {' '}
//                     {formData.service}
//                   </p>
//                   <p>
//                     <span className="font-medium">Location:</span>
//                     {' '}
//                     {formData.city}
//                     ,
//                     {' '}
//                     {formData.country}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           )}

//           <div className="mt-8 flex justify-between">
//             <Button
//               type="button"
//               onClick={step === 1 ? onClose : handlePrevious}
//               className="border border-gray-300 bg-white px-6 py-2 text-gray-700 hover:bg-gray-50"
//             >
//               {step === 1 ? 'Cancel' : 'Previous'}
//             </Button>
//             <Button
//               type="button"
//               onClick={handleNext}
//               className="hover:bg-primary-dark bg-primary px-6 py-2 text-white"
//             >
//               {step === 3 ? 'Submit Quote Request' : 'Next'}
//             </Button>
//           </div>

//           <div className="mt-8 border-t border-gray-200 pt-6 text-center">
//             <p className="text-sm text-gray-600">
//               Or contact us directly:
//               <br />
//               <span className="font-medium">Phone:</span>
//               {' '}
//               +92 21 34830726-7 |
//               <span className="font-medium"> Email:</span>
//               {' '}
//               admin@theterminators.biz.pk
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
