import "./Create.css";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import Img from "../../img/create_announcement.jpg";

function Create() {
  const navigate = useNavigate();
  const user_id = Cookies.get("user_id");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const formObject = {};
    formData.forEach((value, key) => {
      formObject[key] = value;
    });
    const jsonData = JSON.stringify({ user_id, ...formObject });

    try {
      const response = await fetch(
        "http://127.0.0.1:8051/announcements/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: jsonData,
        }
      );

      if (!response.ok) {
        const errorMessage = await response.json();
        alert(errorMessage.message);
        return;
      }

      navigate("/announcements/user");
    } catch (error) {
      alert("Something went wrong");
    }
  };

  return (
    <>
      <div class="block"></div>
      <div class="form_container">
        <form id="create-form" onSubmit={onSubmit}>
          <h2 class="form_title">Create Announcement</h2>
          <label for="subject">Subject</label>
          <input type="text" id="subject" name="subject" />
          <label for="title">Title</label>
          <input type="text" id="title" name="title" />
          <label for="content">Content</label>
          <textarea
            name="content"
            cols="40"
            rows="10"
            required=""
            id="id_content"
            style={{ height: "101px" }}
          />
          <label for="content">Access</label>
          <select name="access" id="id_access">
            <option value="public" selected="">
              Public
            </option>
            <option value="local">Local</option>
          </select>
          <input type="submit" value="Create Announcement" />
        </form>
        <img src={Img} class="registration-img" />
      </div>
      <span class="pencil">✎</span>
      <span class="message"></span>
      <span class="horn">📢</span>
    </>
  );
}

export default Create;
