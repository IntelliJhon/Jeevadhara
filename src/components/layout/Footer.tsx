import React from "react";
import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
    return (
        <footer id="contact" className="bg-[#1A2A56] text-white pt-20 pb-10 border-t-4 border-accent relative">
            {/* Subtle glow effect behind footer for premium touch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/20 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container relative z-10 mx-auto px-4 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
                    {/* BRAND */}
                    <div className="lg:col-span-1">
                        <h3 className="font-heading font-black text-2xl lg:text-[1.7rem] mb-6 tracking-tight leading-tight">
                            Jeevadhara Renal<br />Care Foundation
                        </h3>
                        <p className="text-white/70 text-sm leading-relaxed">
                            A registered trust committed to human welfare, operating on the principles of compassion, transparency, and sustainable development since 2012.
                        </p>
                    </div>

                    {/* QUICK LINKS */}
                    <div className="lg:pl-8">
                        <h4 className="font-bold text-lg mb-6 tracking-wide text-white">Quick Links</h4>
                        <ul className="space-y-4 text-sm text-white/70">
                            <li><Link href="/#about" className="hover:text-white transition-colors relative group inline-block"><span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all group-hover:w-full"></span>Our Story</Link></li>
                            <li><Link href="/#focus" className="hover:text-white transition-colors relative group inline-block"><span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all group-hover:w-full"></span>Welfare Programs</Link></li>
                            <li><Link href="/#innovate" className="hover:text-white transition-colors relative group inline-block"><span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all group-hover:w-full"></span>Innovate with AI</Link></li>
                            <li><Link href="/" className="hover:text-white transition-colors relative group inline-block"><span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all group-hover:w-full"></span>Legal Documents</Link></li>
                        </ul>
                    </div>

                    {/* REACH US */}
                    <div>
                        <h4 className="font-bold text-lg mb-6 tracking-wide text-white">Reach Us</h4>
                        <ul className="space-y-5 text-sm text-white/70">
                            <li>
                                <a href="https://maps.app.goo.gl/dMs8JFgtb4G7nnYa8" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group hover:opacity-80 transition-opacity">
                                    <MapPin className="w-5 h-5 text-[#dc2626] shrink-0 mt-0.5 drop-shadow-md group-hover:scale-110 transition-transform" />
                                    <span className="leading-relaxed group-hover:text-white transition-colors">
                                        Jeevadhara Foundation, Church<br />
                                        Junction, Angamaly, Pin: 683 572
                                    </span>
                                </a>
                            </li>
                            <li className="flex items-center gap-4">
                                <Phone className="w-5 h-5 text-[#dc2626] shrink-0 drop-shadow-md" />
                                <a href="https://wa.me/919447822320" target="_blank" rel="noopener noreferrer" className="font-semibold text-white tracking-wide hover:text-[#25D366] transition-colors flex items-center gap-2 group">
                                    9447822320
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="opacity-0 group-hover:opacity-100 transition-opacity">
                                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                                    </svg>
                                </a>
                            </li>
                            <li className="flex items-center gap-4">
                                <Mail className="w-5 h-5 text-[#dc2626] shrink-0 drop-shadow-md" />
                                <a href="mailto:jeevadharafoundation2012@gmail.com" className="font-semibold text-white hover:text-blue-200 transition-colors">
                                    jeevadharafoundation2012@gmail.com
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* CONNECT & FOLLOW */}
                    <div className="lg:pl-4">
                        <h4 className="font-bold text-lg mb-6 tracking-wide text-white">Connect & Follow</h4>
                        <p className="text-white/70 text-sm leading-relaxed mb-6">
                            Follow our journey and stay updated with our latest welfare initiatives.
                        </p>
                        <div className="flex items-center gap-5">
                            <a href="https://www.facebook.com/jeevadharang" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#1877F2] hover:text-white transition-all transform hover:-translate-y-1 shadow-lg" title="Facebook">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                </svg>
                            </a>
                            <a href="https://www.instagram.com/jeevadharafoundation_" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#E4405F] hover:text-white transition-all transform hover:-translate-y-1 shadow-lg" title="Instagram">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                                </svg>
                            </a>
                            <a href="https://wa.me/919447822320" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#25D366] hover:text-white transition-all transform hover:-translate-y-1 shadow-lg" title="WhatsApp Us">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                {/* BOTTOM BAR */}
                <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row items-center justify-center md:gap-4 text-[13px] text-white/50 tracking-wide gap-3">
                    <p>&copy; {new Date().getFullYear()} Jeevadhara Foundation. All Rights Reserved.</p>
                    <div className="hidden md:block w-px h-3 bg-white/30"></div>
                    <div className="flex items-center gap-4 mt-2 md:mt-0">
                        <Link href="/" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <span className="w-px h-3 bg-white/30"></span>
                        <Link href="/" className="hover:text-white transition-colors">Terms & Conditions</Link>
                    </div>
                </div>

                {/* ADMIN LINK: SUPER SUBTLE AT THE VERY BOTTOM */}
                <div className="flex justify-center mt-6">
                    <Link href="/admin/login" className="text-[10px] text-white/20 hover:text-white/80 transition-colors">Admin Login</Link>
                </div>
            </div>
        </footer>
    );
}
