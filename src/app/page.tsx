'use client'

import React from 'react'
import HeroSection from './components/sections/hero'
import AboutSection from './components/sections/about'
import ExperienceSection from './components/sections/experience'
import WhatWeDoSection from './components/sections/what-we-do'
import ConveniencesSection from './components/sections/conveniences'
import ProjectsSection from './components/sections/projects'
import PricingSection from './components/sections/pricing'
import ContactsSection from './components/sections/contacts'

const HomePage: React.FC = () => {
	React.useEffect(() => {
		// Callback for IntersectionObserver
		const callback = function (entries: any) {
			entries.forEach((entry: any) => {
				// Is the element in the viewport?
				if (entry.isIntersecting) {
					// Add the fadeIn class:
					entry.target.classList.add('animate-fadeIn')
				} else {
					// Otherwise remove the fadein class
					entry.target.classList.remove('animate-fadeIn', 'opacity-0')
				}
			})
		}
		// Set up a new observer
		const observer = new IntersectionObserver(callback)

		// Get all the elements you want to show on scroll
		const targets = document.querySelectorAll('[data-reveal="true"]')
		// Loop through each of the target
		targets.forEach(function (target) {
			target.classList.add('opacity-0')
			// Add the element to the watcher
			observer.observe(target)
		})
	}, [])

	return (
		<>
			<HeroSection />
			<AboutSection />
			<ExperienceSection />
			<WhatWeDoSection />
			<ConveniencesSection />
			<ProjectsSection />
			<PricingSection />
			<ContactsSection />
		</>
	)
}

export default HomePage
