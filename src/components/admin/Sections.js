import React from 'react';
import { Button,Form,Row,Col } from 'react-bootstrap';

class Sections extends React.Component {

	constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
			courses:[],
			lectures:[]
    };
  }

	onSelectCategory(e){
		alert(e.target.value)
		console.log(e.target)
	}
	onSelectCourse(e){
		let courseid = e.target.value;
		console.log(courseid);
	  fetch("http://localhost:8080/lecture/list?courseId="+courseid)
      .then(res => res.json())
      .then(
        (result) => {
					console.log(result)
          this.setState({
            isLoaded: true,
            lectures: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
	  )
	}
	componentDidMount() {
    fetch("http://localhost:8080/category/list")
      .then(res => res.json())
      .then(
        (result) => {
					console.log(result)
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
     fetch("http://localhost:8080/course/list")
      .then(res => res.json())
      .then(
        (result) => {
					console.log(result)
          this.setState({
            isLoaded: true,
            courses: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
 }
  render() {
		const { error, isLoaded, items,sections,courses,lectures } = this.state;
		if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
		} else {
    	return (
			  <div>
					<Form action="www.baid.com">
						<Form.Group controlId="exampleForm.ControlSelect1">
						  <Form.Label>select category</Form.Label>
						  <Form.Control as="select" 
														onChange={this.onSelectCategory.bind(this)}
														inputRef={node => this.inputNode = node  } >
								{
									items.map(item => (
										<option  key={item.id} value={item.id}>{item.name}</option>
									))
								}
							</Form.Control>
						</Form.Group>
						<Form.Group controlId="exampleForm.Controlect1">
						  <Form.Label>select course</Form.Label>
						  <Form.Control as="select" onChange={ this.onSelectCourse.bind(this) }>
								{
									courses.map(course => (
										<option value={course.id} key={course.id}>{course.name}</option>
									))
								}
							</Form.Control>
						</Form.Group>
						<Form.Group controlId="exampleForm.Controlect1">
						  <Form.Label>select lecture</Form.Label>
						  <Form.Control as="select">
								{
									lectures.map(lecture => (
										<option id={lecture.id} key={lecture.id}>{'secttion ' + lecture.no + ':' +lecture.name}</option>
									))
								}
							</Form.Control>
						</Form.Group>
					<Form.Group as={Row} controlId="formPlaintextPassword">
						  <Form.Label column sm="2">
						    Word 
						  </Form.Label>
						  <Col sm="10">
						    <Form.Control type="text" placeholder="Word" />
						  </Col>
						</Form.Group>
						<Button variant="info" block>
							Add new Section
						</Button>
						<Button variant="primary" type="submit" block>
						  Submit
						</Button>
					</Form>
			  </div>
			);
		}
  }
}
export default Sections
