import React from 'react'

const useRevealAnimation = () => {
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
					// entry.target.classList.remove('animate-fadeIn', 'opacity-0')
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
}

export default useRevealAnimation
