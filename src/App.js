// components
import Title from "./components/Title"
import Description from "./components/Description"

// css
import "./css/style.css"

const App = () => {
	return (
		<div className="container">
			{/* including the Title as well as Description components */}
			<Title />
			<Description />
		</div>
	)
}

export default App
