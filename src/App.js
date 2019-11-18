// create your App component here
export default class App extends Component {
    constructor() {
        super();
        this.state = {
          people: []
        };
      }
    componentDidMount() {
        fetch("http://api.open-notify.org/astros.json")
          .then(response => response.json())
          .then(data => {
            console.log(data);
            this.setState({
              people: data.people
            });
          });
      }
      
  
    render() {
      return (
        <div>
            <table border="2">
          <thead>
            <tr>
              <th>Name</th>
              <th>Craft</th>
            </tr>
          </thead>
          <tbody>
            {this.state.people.map(person => (
              <tr key={person.name}>
                <td>{person.name}</td>
                <td>{person.craft}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      );
    }
  }