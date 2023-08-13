import Section from '@/shared/components/layout/section'
import { CheckIcon } from '@/shared/components/ui/icons'
import { HTMLProps } from 'react'

interface ConveniencesSectionProps extends HTMLProps<HTMLDivElement> {}

const ConveniencesSection: React.FC<ConveniencesSectionProps> = ({
	...props
}) => {
	return (
		<Section id='conveniences' useWhiteBackgroundImage>
			<div className='section-container'>
				<h2
					data-reveal
					className='capitalise text-4xl  md:text-6xl leading-tight'>
					УДОБСТВО ОПЛАТЫ И ГАРАНТИИ КАЧЕСТВА
				</h2>
				<ul className='mt-24 flex flex-col gap-8 md:gap-12 lg:gap-16 pr-2'>
					<Item
						title='Работа без авансов'
						text='Мы используем понятный и прозрачный формат поэтапной оплаты ремонта. Это удобно для заказчиков.'
					/>
					<Item
						title='Договор'
						text='Все соглашения и обязательства юридически закреплены. В договоре прописаны все этапы работ. Договор заключается с ООО.'
					/>
					<Item
						title='Любой объект и уровень сложности'
						text='Квартиры, дома, таунхаусы, магазины, офисы, кафе — мы сделаем качественный ремонт на любом объекте.'
					/>
					<Item
						title='Гарантия'
						text='Предоставляем 5-летнюю гарантию на все выполненные работы.'
					/>
					<Item
						title='Ведение проекта под ключ'
						text='Создадим дом вашей мечты, начиная с идеи и заканчивая обстановкой. Выполним приемку квартиры у застройщика, дизайн-проект, закупку материалов, профессиональный ремонт.'
					/>
					<Item
						title='Опыт'
						text='Мы занимаемся ремонтом и отделкой уже 20 лет. За это время успешно завершили 241 проект. В нашей команде работают мастера своего дела. Мы не гонимся за дешевой рабочей силой и привлекаем к работе только узкопрофильных специалистов высокого класса.'
					/>
					<Item
						title='Страховка'
						text='Мы за свой счет оформляем страхование объекта на 5 лет с момента итоговой приемки работ. Сумма возмещения — до 1 500 000 р.'
					/>
					<Item
						title='Прозрачность и честность'
						text='Предоставляем еженедельную финансовую отчетность онлайн, фото - и видеоотчеты с объекта.'
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
			className='min-h-fit min-w-fit w-8 h-8 lg:w-12 lg:h-12 fill-orange-500'
		/>
		<div data-reveal className='flex flex-col gap-3'>
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
