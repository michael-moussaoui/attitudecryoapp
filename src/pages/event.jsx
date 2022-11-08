import React from "react";
import { motion } from "framer-motion";

// import ParticlesBackground from "components/Animation/ParticlesBackground";
// import ButtonToUp from "components/Button/ButtonToUp";

// import Styles from "../styles/events.module.css";

import ParticleBackground from "../Components/Animation/ParticlesBackground";

function event() {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0, transition: { duration: 0.5 } }}
			className=" min-h-full bg-blue1 font-taviraj"
		>
			<div className="w-screen h-[100vh]">
				<p className="relative z-50 top-[30vh] px-5 text-center xs:text-4xl sm:text-5xl md:text-6xl mdl:text-7xl text-skyblue font-taviraj">
					Ouverture très prochainement de votre centre Attitude Cryo
				</p>
				<ParticleBackground />
			</div>
		</motion.div>
	);
}

export default event;
