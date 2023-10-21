import { Flat } from './components/Flat';
import { Scroll } from './components/Scroll';
import { getRandomBoolean } from './utils/getRandomBoolean';

export default function App() {
	const randomBoolean = getRandomBoolean(0);

	if (randomBoolean) {
		return <Scroll />;
	}

	// return <Flat />;
	return <Scroll />;
}
