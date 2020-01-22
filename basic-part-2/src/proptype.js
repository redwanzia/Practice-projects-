const Person = ({ img, name, age, info }) => {
	return (
		<article>
			<img src={img} alt='person' />
			<h4>Name: {name}</h4>
			<h4>Age: {age}</h4>
			<h4>Info: {info}</h4>
		</article>
	);
};
Person.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  info: PropTypes.string.isRequired,
   
}




class PersonList extends Component {
	state = {
		people: [
			{
				id: 1,
				img: 'https://randomuser.me/api/portraits/thumb/men/75.jpg',
				name: 'Bob',
				age: 28
			},
			{
				id: 2,
				img: 'https://randomuser.me/api/portraits/thumb/men/34.jpg',
				name: 'Max',
				age: 22
      },
      {
				id: 3,
				img: 'https://randomuser.me/api/portraits/thumb/men/44.jpg',
				name: 'Max',
        age: 29,
        info: 'Some info'
			}
		]
	};
	render() {
		return (
			<section>
				{this.state.people.map((person) => (
					<Person key={person.id} img={person.img} name={person.name} age={person.age} info={person.info} />
				))}
			</section>
		);
	}
}