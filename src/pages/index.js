import React from 'react'
import tw from 'tailwind.macro'

const Page = tw.div`flex justify-center items-center absolute inset-0 bg-gray-400`

const Container = tw.div`bg-white my-8 mx-auto max-w-sm shadow-lg rounded-lg overflow-hidden font-sans`

const Wrapper = tw.div`sm:flex sm:items-center px-6 py-4`

const Avatar = tw.img`block h-16 sm:h-24 rounded-full mx-auto mb-4 sm:mb-0 sm:mr-4 sm:ml-0`

const TextContainer = tw.div`text-center sm:text-left sm:flex-grow`

const TextSpacing = tw.div`mb-4`

const Company = tw.p`my-0 text-sm leading-tight text-gray-600`

const Name = tw.h1`my-0 text-xl leading-tight`

const Button = tw.button`bg-white border-purple-500 border font-semibold hover:bg-purple-500 hover:text-white leading-normal px-4 py-1 rounded-full text-purple-500 text-xs`

export default () => (
	<Page>
		<Container>
			<Wrapper>
				<Avatar
					src="https://lengstorf.com/images/jason-lengstorf.jpg"
					alt="Jason Lengstorf"
				/>
				<TextContainer>
					<TextSpacing>
						<Name>Jason Lengstorf</Name>
						<Company>Developer at Gatsby</Company>
					</TextSpacing>
					<Button>High Five</Button>
				</TextContainer>
			</Wrapper>
		</Container>
	</Page>
)
