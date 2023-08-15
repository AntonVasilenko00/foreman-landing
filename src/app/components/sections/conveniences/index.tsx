import Section from '@/shared/components/layout/section'
import { CheckIcon } from '@/shared/components/ui/icons'
import {
	NUMBER_OF_PROJECTS,
	YEARS_OF_EXPERIENCE,
	YEARS_OF_WARRANTY,
} from '@/shared/constants'
import { HTMLProps } from 'react'

interface ConveniencesSectionProps extends HTMLProps<HTMLDivElement> {}

const ConveniencesSection: React.FC<ConveniencesSectionProps> = ({
	...props
}) => {
	return (
		<Section id='conveniences' useWhiteBackgroundImage>
			<div className='container mx-auto px-10 mt-24 lg:mt-36'>
				<h2
					data-reveal
					className='capitalise text-4xl  md:text-6xl leading-tight'>
					УДОБСТВО ОПЛАТЫ И ГАРАНТИИ КАЧЕСТВА
				</h2>
				<ul className='mt-24 grid gap-8 md:gap-12 lg:gap-16 lg:grid-cols-2'>
					<Item
						title='Работа без авансов'
						text='Мы используем понятный и прозрачный формат поэтапной оплаты ремонта. Это удобно для заказчиков.'
					/>
					<Item
						title='Любой объект и уровень сложности'
						text='Квартиры, дома, таунхаусы, магазины, офисы, кафе — мы сделаем качественный ремонт на любом объекте.'
					/>
					<Item
						title='Гарантия'
						text={`Предоставляем ${YEARS_OF_WARRANTY}-летнюю гарантию на все выполненные работы.`}
					/>
					<Item
						title='Ведение проекта под ключ'
						text='Создадим дом вашей мечты, начиная с идеи и заканчивая обстановкой. Выполним дизайн-проект, закупку материалов, профессиональный ремонт.'
					/>
					<Item
						title='Опыт'
						text={`Мы занимаемся ремонтом и отделкой уже ${YEARS_OF_EXPERIENCE} лет. За это время успешно завершили ${NUMBER_OF_PROJECTS} проектов. В нашей команде работают мастера своего дела. Мы привлекаем к работе узкопрофильных специалистов высокого класса.`}
					/>
					<Item
						title='Прозрачность и честность'
						text='Предоставляем еженедельную отчетность онлайн, фото - и видеоотчеты с объекта.'
					/>
				</ul>
			</div>
		</Section>
	)
}

interface ItemProps {
	title: string
	text: string
}

const Item: React.FC<ItemProps> = ({ title, text }) => (
	<li className='flex gap-4 md:gap-6'>
		<CheckIcon
			data-reveal
			className='min-w-[2rem] min-h-[2rem] lg:min-w-[3rem] lg w-8 h-8 lg:w-12 lg:h-12 fill-orange-500'
		/>
		<div data-reveal className='flex-grow flex flex-col gap-3'>
			<p data-reveal className='font-semibold text-lg md:text-3xl'>
				{title}
			</p>
			<p data-reveal className='text-sm font-thin md:text-lg'>
				{text}
			</p>
		</div>
	</li>
)

export default ConveniencesSection
