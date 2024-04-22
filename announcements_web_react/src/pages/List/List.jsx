import { useEffect, useState } from "react";
import "./List.css";
import Cookies from "js-cookie";

function List() {
  const [list, setList] = useState([]);
  const user_id = Cookies.get("user_id");

  const getData = async () => {
    const data = await fetch(
      "http://127.0.0.1:8051/announcements/all/" + user_id,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((data) => data.json());
    setList(JSON.parse(data.data)?.map((item) => item.fields) ?? []);
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(list);

  return (
    <>
      <div class="wrapper_center">
        <div class="root_list">
          <ul class="list">
            <li class="column_title">
              <span class="title">Subject</span>
              <span class="title">Title</span>
              <span class="content">Content</span>
              <span class="access">Access</span>
              <span class="date">Date</span>
              <span class="actions">Actions</span>
            </li>
            {list.map((item) => (
              <li>
                <strong>{item.subject}</strong>
                <strong>{item.title}</strong>
                <span>{item.content}</span>
                <span>{item.access}</span>
                <span>{item.create_date}</span>
                <a href="/">View Details</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default List;
