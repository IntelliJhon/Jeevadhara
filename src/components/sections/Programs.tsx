"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";

const PROJECTS = [
    {
        title: "KARUTHAL",
        description: "Scheme of providing free dialysis to individuals who require it and providing educational scholarship to dependent children to them. Alongside medical assistance, the Foundation also offers educational scholarships to the dependent children of dialysis patients to ensure continuity in their education. This initiative aims to reduce the financial burden on affected families while supporting both healthcare needs and the future of the children.",
        image: "/images/KARUTHAL.jpeg"
    },
    {
        title: "SAMANNAYAM",
        description: "Early detection camps and classes on healthy life style in collaboration with local NGOs, CSOs, FBOs, Residents Associations, Community Service Clubs etc.",
        image: "/images/Eyecamp.jpeg"
    },
    {
        title: "ABHAYAM CROSS DONATION",
        description: "Jeevadhara Supports swiping programs for organ transplantation and facilitating organ exchanges.",
        image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=800&auto=format&fit=crop"
    },
    {
        title: "SANTHWANAM",
        description: "Counselling services to patients, their relatives and public both offline and online.",
        image: "/images/Santhwanam.jpeg"
    },
    {
        title: "SNEHATHIN KAYTHANGU",
        description: "Health care equipments used / unused collection program to assist patients facing financial challenges.",
        image: "/images/SNEHATHINKAYTHANG.jpeg"
    },
    {
        title: "SAHAYATHRI: 24 x 7 Support",
        description: "Ambulance Service on call to patients with end stage renal care to access lifesaving treatment facility on fast track.",
        image: "/images/SAHAYATHRI.jpeg"
    },
    {
        title: "SRADHA",
        description: "Dissemination of information on lifestyle diseases through IEC and other means. As part of this initiative, the Foundation observes important health-related days by organising awareness classes, interactive sessions, and community programmes, aiming to educate the public on prevention, healthy habits, and the importance of timely care.",
        image: "/images/SRADHA.jpeg"
    },
    {
        title: "DENTAL CAMP",
        description: "Dental health screening and awareness camps conducted in collaboration with dental colleges to ensure oral hygiene and early detection of dental issues in the community.",
        image: "/images/DENTAL.jpeg"
    },
    {
        title: "BREAST CANCER AWARENESS",
        description: "Specialized screening and awareness programs focused on early detection of breast cancer, providing vital information and health checks to women.",
        image: "/images/BREASTCANCER.jpeg"
    },
    {
        title: "FLOOD RELIEF",
        description: "Emergency response and support programs providing immediate aid, food, and medical assistance to communities affected by natural disasters and floods.",
        image: "/images/FLOOD RELIEF.jpeg"
    }
];

const PROGRAMMES = [
    {
        title: "Karuthal Beneficiaries Festive Family Gatherings",
        description: "As part of the Karuthal Project, Jeevadhara Foundation organizes special get-togethers and festive gatherings for dialysis patients and their families during occasions such as Onam, Vishu, Christmas, and other celebrations. These programmes are conducted with the aim of promoting emotional well-being, social inclusion, mutual support, and a sense of togetherness among beneficiaries, while strengthening the compassionate care and community support initiatives of the Foundation.",
        image: "/images/KaruthalBeneficiary.jpeg"
    },
    {
        title: "Naalumani Pookkal Programme",
        description: "Naalumani Pookal is an ongoing initiative of Jeevadhara Foundation conducted across various wards of Angamaly Municipality, aimed at promoting the physical, emotional, and mental well-being of senior citizens through daily gatherings and community engagement activities. The programme provides a friendly and supportive space for elderly people to interact, participate in wellness activities, yoga, recreational programmes, and social gatherings, helping to reduce loneliness and emotional isolation caused by changing family structures and the migration of children. Through companionship, active participation, and community bonding, the initiative strives to ensure healthy, happy, and dignified ageing for senior citizens.",
        image: "/images/Naalumani.jpeg"
    },
    {
        title: "Jeevadhara Yoga Centre",
        description: "The Jeevadhara Yoga Centre is dedicated to promoting physical, mental, and emotional well-being through the practice of yoga. The center offers guided yoga sessions focused on improving flexibility, strength, balance, and inner calm for people of all age groups. By integrating traditional yoga practices with a holistic approach to health, the Jeevadhara Yoga Centre supports individuals in leading healthier, more balanced, and stress-free lives.",
        image: "/images/YOGA .jpeg"
    },
    {
        title: "Internship Programmes",
        description: "Jeevadhara Foundation provides internship opportunities for students and aspiring professionals to gain practical exposure in the field of social work, community development, healthcare support, and NGO administration. The internship programmes are designed to offer hands-on experience through participation in community outreach activities, medical camps, awareness programmes, beneficiary support initiatives, elderly welfare programmes, and various social service interventions. Through guided field practice and organizational involvement, interns are encouraged to develop professional skills, social responsibility, leadership qualities, and a deeper understanding of community-based service and humanitarian work",
        image: "/images/INTERNSHIP .jpeg"
    },
    {
        title: "ANGAMALY MARATHON",
        description: "The Angamaly Marathon is the first-ever marathon initiative organised in Angamaly by Jeevadhara Foundation with the aim of promoting healthy living, physical fitness, and social awareness among people of all age groups. The first and second editions of the marathon witnessed the enthusiastic participation of more than 2,000 participants, making it a vibrant community movement for health and social responsibility. Conducted under the powerful message, “Choose Miles, Not Drugs,” the marathon also serves as a strong awareness campaign against drug abuse and substance addiction among youth and society. Through this initiative, Jeevadhara Foundation encourages healthy lifestyle practices, community participation, discipline, and positive social values while inspiring people to choose fitness, health, and hope over harmful addictions.",
        image: "/images/Marathon.jpeg"
    },
    {
        title: "Kids Summer Camp Programmes",
        description: "Jeevadhara Foundation organises engaging and value-based Kids Summer Camp Programmes during school vacation periods to provide children with a joyful, creative, and enriching learning environment. The camps are designed to reduce screen addiction among children and encourage active participation in social, cultural, and recreational activities. Through games, arts, crafts, yoga, personality development sessions, storytelling, music, dance, and interactive learning experiences, the programme helps enhance creativity, confidence, social commitment, teamwork, and humanitarian values among children. The camps also promote healthy habits, positive behaviour, and meaningful social interaction, ensuring a safe, enjoyable, and productive vacation experience for children.",
        image: "/images/kids.jpeg"
    },
    {
        title: "Sports Support Initiatives for Youth and Children",
        description: "Jeevadhara Foundation actively organises sports support initiatives and wellness programmes for children and youth with the aim of promoting healthy lifestyles, physical fitness, discipline, and positive social values. Through various sports activities, coaching camps, awareness programmes, and community-based events, the Foundation strives to create awareness about the harmful effects of drug abuse and substance addiction among the younger generation. These initiatives encourage children and youth to adopt exercise, sportsmanship, teamwork, and healthy habits as a way of life, while inspiring them to choose positivity, confidence, and personal growth over harmful addictions. By promoting active community participation and healthy recreational engagement, Jeevadhara Foundation aims to build a healthier, more responsible, and socially conscious generation.",
        image: "/images/sport.jpeg"
    }
];

export function Programs() {
    return (
        <div className="flex flex-col">
            <section id="projects" className="py-16 md:py-24 bg-zinc-50 relative overflow-hidden">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-zinc-200 shadow-sm mb-6"
                        >
                            <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                            <span className="text-sm font-semibold tracking-wide text-foreground/80 uppercase">We are now ready to reach out more</span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6"
                        >
                            Our Projects
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-lg text-foreground/70 leading-relaxed"
                        >
                            Explore our comprehensive initiatives designed to support, heal, and empower our community.
                        </motion.p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {PROJECTS.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="h-full"
                            >
                                <Card className="h-full bg-white flex flex-col p-0 overflow-hidden group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-t-[5px] border-t-white hover:border-t-primary rounded-3xl">
                                    <div className="relative h-56 overflow-hidden bg-zinc-100">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </div>
                                    <div className="p-8 flex flex-col flex-1">
                                        <h3 className="text-xl font-bold font-heading text-primary mb-4 leading-tight">
                                            {project.title}
                                        </h3>
                                        <p className="text-[15px] text-foreground/70 flex-1 leading-relaxed line-clamp-6">
                                            {project.description}
                                        </p>
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="programmes" className="py-16 md:py-24 bg-white relative overflow-hidden">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6"
                        >
                            Our Programmes
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-lg text-foreground/70 leading-relaxed"
                        >
                            Engaging activities and events organized for community well-being and growth.
                        </motion.p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {PROGRAMMES.map((programme, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="h-full"
                            >
                                <Card className="h-full bg-zinc-50 flex flex-col p-0 overflow-hidden group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-t-[5px] border-t-zinc-50 hover:border-t-primary rounded-3xl">
                                    <div className="relative h-56 overflow-hidden bg-zinc-100">
                                        <img
                                            src={programme.image}
                                            alt={programme.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </div>
                                    <div className="p-8 flex flex-col flex-1">
                                        <h3 className="text-xl font-bold font-heading text-primary mb-4 leading-tight">
                                            {programme.title}
                                        </h3>
                                        <p className="text-[15px] text-foreground/70 flex-1 leading-relaxed line-clamp-6">
                                            {programme.description}
                                        </p>
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
