import { useState, useEffect } from "react";
import { Button, Container, Form, Row, Col, Alert } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { getStudentById, updateStudent } from "../Api/studentapi";

const COURSES = ["Mern stack", "React", "AI", "Web", "Graphic"];

const EditStudentPage = () => {
  // read the id from URL
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    course: "",
    marks: "",
    city: "",
  });

  // state for handling the error
  const [error, setError] = useState({});
  // hook to showing the message
  const [message, setMessage] = useState(null);

  // fetch the student saved data once the page load
  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const data = await getStudentById(id);
        //finally giving all data from database to hook
        setFormData({
          name: data.data.name,
          email: data.data.email,
          course: data.data.course,
          marks: data.data.marks,
          city: data.data.city,
        });
      } catch (err) {
        console.log(err);
      }
    };
    fetchStudent();
  }, [id]);

  // fetch to capture every character of input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedData = { ...formData, [name]: value };
    setFormData(updatedData);
    console.log("Current Form Data:", updatedData);
  };

  // function will run when we submit the form
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateStudent(id, { ...formData });
      setMessage({ variant: "success", text: "Student data updated Successfully!" });
      setTimeout(() => navigate("/"), 2000);
    } catch (error) {
      setMessage({ variant: "danger", text: "Error updating student" });
    }
  };

  return (
    <div>
      <div className="page-title-section">
        <h1>Edit Student Record</h1>
        <p className="subtitle">Update the student information below</p>
      </div>

      <Container className="mb-5">
        <Row className="justify-content-center">
          <Col xs={12} sm={10} md={8} lg={6}>
            {message && <Alert variant={message.variant}>{message.text}</Alert>}
            {/* Form starts here */}
            <Form onSubmit={handleSubmit}>
              {/* Student Name field */}
              <Form.Group className="mb-3">
                <Form.Label>Student Name</Form.Label>
                <Form.Control
                  value={formData.name}
                  type="text"
                  name="name"
                  placeholder="Enter Name"
                  onChange={handleChange}
                  required
                />
                <Form.Text className="text-muted">
                  Please enter your name
                </Form.Text>
              </Form.Group>

              {/* Email Address field */}
              <Form.Group className="mb-3">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  value={formData.email}
                  type="email"
                  name="email"
                  placeholder="Enter Email"
                  onChange={handleChange}
                  required
                />
                <Form.Text className="text-muted">
                  Please enter your valid email address
                </Form.Text>
              </Form.Group>

              {/* Course dropdown */}
              <Form.Group className="mb-3">
                <Form.Label>Course</Form.Label>
                <Form.Select
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a Course</option>
                  {COURSES.map((c, index) => (
                    <option key={index} value={c}>
                      {c}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>

              {/* City field */}
              <Form.Group className="mb-3">
                <Form.Label>City</Form.Label>
                <Form.Control
                  value={formData.city}
                  type="text"
                  name="city"
                  placeholder="Enter City"
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              {/* Marks field */}
              <Form.Group className="mb-3">
                <Form.Label>Marks</Form.Label>
                <Form.Control
                  value={formData.marks}
                  type="number"
                  name="marks"
                  placeholder="Enter Marks"
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              {/* Save and Cancel buttons */}
              <div className="d-grid gap-2">
                <Button variant="primary" type="submit">
                  Update Student
                </Button>
                <Button variant="secondary" onClick={() => navigate("/")}>
                  Cancel
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default EditStudentPage;
