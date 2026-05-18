"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { Activity, Heart, Presentation, Users, Stethoscope, FileSearch, Eye } from "lucide-react";

const ACTIVITIES = [
    {
        title: "Financial Assistance",
        description: "For renal patients for dialysis through authorized coupons of the Foundation.",
        icon: <Activity className="w-6 h-6 text-blue-500" />
    },
    {
        title: "Organ Donation Promotion",
        description: "\"MRITHASANJEEVANI\" Programme in co-operation with Government of Kerala.",
        icon: <Heart className="w-6 h-6 text-red-500" />
    },
    {
        title: "Awareness & Seminars",
        description: "Conducting awareness sessions and seminars on life style diseases.",
        icon: <Presentation className="w-6 h-6 text-amber-500" />
    },
    {
        title: "Beneficiary Get-togethers",
        description: "Gatherings of beneficiaries and their families at special occasions like ONAM, CHRISTMAS, NEW YEAR ETC...",
        icon: <Users className="w-6 h-6 text-purple-500" />
    },
    {
        title: "Dialysis Machines",
        description: "Mobilization and installation of Dialysis machines at hospitals in rural areas.",
        icon: <Stethoscope className="w-6 h-6 text-teal-500" />
    },
    {
        title: "Disease Detection Camps",
        description: "Life style disease detection camps in association with SNIMS CHALAKKA.",
        icon: <FileSearch className="w-6 h-6 text-indigo-500" />
    },
    {
        title: "Dental & Eye Camps",
        description: "In association with L.F Hospital Angamaly and Mar Baselios dental college Kothamangalam.",
        icon: <Eye className="w-6 h-6 text-emerald-500" />
    }
];

export function OngoingActivities() {
    return (
        <section id="ongoing-activities" className="py-24 bg-white relative overflow-hidden border-b border-zinc-200">
            {/* Background elements */}
            <div className="absolute top-0 right-0 p-64 bg-primary/5 rounded-full blur-3xl -z-10 -mr-32 -mt-32"></div>
            
            <div className="container mx-auto px-4 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-heading font-bold text-primary mb-6"
                    >
                        Ongoing Activities
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-foreground/70 leading-relaxed"
                    >
                        Ongoing programmes and activities of Jeevadhara will be continued with more vigour and enthusiasm by our professional team.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {ACTIVITIES.map((activity, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="h-full bg-zinc-50 border border-zinc-100 hover:border-primary/30 transition-all hover:-translate-y-1 hover:shadow-lg hover:bg-white flex flex-col p-6 group rounded-2xl">
                                <div className="w-14 h-14 bg-white shadow-sm rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    {activity.icon}
                                </div>
                                <h3 className="text-xl font-bold font-heading text-primary mb-3">
                                    {activity.title}
                                </h3>
                                <p className="text-sm text-foreground/70 leading-relaxed">
                                    {activity.description}
                                </p>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
