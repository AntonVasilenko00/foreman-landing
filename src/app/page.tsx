'use client'

import React, { useState } from 'react'
import HeroSection from './components/sections/hero'
import AboutSection from './components/sections/about'
import ExperienceSection from './components/sections/experience'
import WhatWeDoSection from './components/sections/what-we-do'
import ConveniencesSection from './components/sections/conveniences'
import ProjectsSection from './components/sections/projects'
import PricingSection from './components/sections/pricing'
import ContactsSection from './components/sections/contacts'
import ContactFormSection from './components/sections/contact-form'

const HomePage: React.FC = () => {

	return (
		<>
			<HeroSection />
			<AboutSection />
			<ExperienceSection />
			<WhatWeDoSection />
			<ContactFormSection />
			<ConveniencesSection />
			<ProjectsSection />
			<PricingSection />
			<ContactsSection />
		</>
	)
}

export default HomePage
