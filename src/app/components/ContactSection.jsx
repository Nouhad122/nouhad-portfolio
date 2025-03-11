"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";

const ContactSection = () => {
  const contactInfo = {
    email: "nouhadalhallab122@gmail.com",
    linkedin: "https://www.linkedin.com/in/nouhad-elhallab",
    github: "https://github.com/Nouhad122",
    whatsapp: "https://wa.me/+905344421873" 
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center z-10 relative">
        <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Let&apos;s Connect
      </h2>
          <p className="text-[#ADB7BE] mb-8 max-w-lg mx-auto">
            I&apos;m currently looking for new opportunities. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
          </p>
          
          {/* Email Button */}
          <a 
            href={`mailto:${contactInfo.email}?subject=Portfolio Inquiry`} 
            className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-3 px-8 rounded-full inline-block mb-10 transition-all duration-300"
          >
            Send Me an Email
          </a>
          
          {/* Social Links */}
          <div className="flex justify-center items-center gap-6 mt-4">
            <Link 
              href={contactInfo.github}
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:opacity-80 transition-opacity duration-300"
            >
              <Image src={GithubIcon} alt="GitHub" width={40} height={40} />
            </Link>
            
            <Link 
              href={contactInfo.linkedin}
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:opacity-80 transition-opacity duration-300"
            >
              <Image src={LinkedinIcon} alt="LinkedIn" width={40} height={40} />
            </Link>
            
            <Link 
              href={contactInfo.whatsapp}
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-[#25D366] p-2 rounded-full hover:opacity-80 transition-opacity duration-300"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.6 6.32C16.12 4.82 14.12 4 12 4C7.72 4 4.24 7.48 4.24 11.76C4.24 13.32 4.64 14.84 5.36 16.16L4.16 20L8.12 18.84C9.4 19.52 10.68 19.84 12 19.84C16.28 19.84 19.76 16.36 19.76 12.08C19.76 9.96 18.96 7.92 17.6 6.32ZM12 18.44C10.84 18.44 9.72 18.12 8.72 17.56L8.48 17.4L6.12 18.08L6.8 15.8L6.64 15.56C6 14.52 5.68 13.24 5.68 11.96C5.68 8.28 8.48 5.28 12.16 5.28C13.92 5.28 15.56 5.96 16.8 7.2C18.04 8.44 18.72 10.08 18.72 11.84C18.56 15.52 15.68 18.44 12 18.44ZM15.64 13.4C15.4 13.28 14.28 12.72 14.04 12.64C13.8 12.56 13.64 12.52 13.48 12.76C13.32 13 12.88 13.52 12.76 13.68C12.64 13.84 12.48 13.88 12.24 13.72C10.84 13.04 9.96 12.44 9.04 10.84C8.8 10.44 9.24 10.48 9.64 9.68C9.72 9.52 9.68 9.36 9.64 9.24C9.6 9.12 9.16 8 8.96 7.52C8.76 7.04 8.56 7.12 8.44 7.12C8.32 7.12 8.16 7.12 8 7.12C7.84 7.12 7.6 7.16 7.36 7.4C7.12 7.64 6.52 8.2 6.52 9.32C6.52 10.44 7.32 11.52 7.44 11.68C7.56 11.84 9.16 14.32 11.6 15.28C13.2 15.92 13.84 15.92 14.64 15.8C15.12 15.72 16.04 15.24 16.24 14.68C16.44 14.12 16.44 13.64 16.36 13.56C16.28 13.48 16.12 13.44 15.84 13.28L15.64 13.4Z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;