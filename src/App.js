import "./App.css";
import Book from "./components/Book";

const books = [
  {
    title: "Harry Potter and the Philosopher's Stone",
    author: "J.K. Rowling",
    publish_date: "1997",
    book_cover:
      "https://res.cloudinary.com/the-harry-potter-database/image/upload/c_fill,h_390,w_250/v1590249796/Harry_Potter_1_-_Harry_Potter_and_the_Philosophers_Stone_-_Thomas_Taylor_tkuvuf.jpg",
  },
  {
    title: "Harry Potter and the Chamber of Secrets",
    author: "J.K. Rowling",
    publish_date: "1998",
    book_cover:
      "https://res.cloudinary.com/the-harry-potter-database/image/upload/c_fill,h_390,w_250/v1590249801/Harry_Potter_2_-_Harry_Potter_and_the_Chamber_of_Secrets_-_Cliff_Wright_rkruh4.jpg",
  },
  {
    title: "Harry Potter and Prisoner of Azkaban",
    author: "J.K. Rowling",
    publish_date: "1999",
    book_cover:
      "https://res.cloudinary.com/the-harry-potter-database/image/upload/c_fill,h_390,w_250/v1590249805/Harry_Potter_3_-_Harry_Potter_and_the_Prisoner_of_Azkaban_-_Cliff_Wright.jpg_ti6wxh.jpg",
  },
  {
    title: "Harry Potter and the Goblet of Fire",
    author: "J.K. Rowling",
    publish_date: "2000",
    book_cover:
      "https://res.cloudinary.com/the-harry-potter-database/image/upload/c_fill,h_390,w_250/v1590249790/Harry_Potter_4_-_Harry_Potter_and_the_Goblet_of_Fire_-_Giles_Greenfield_lb38dj.jpg",
  },
  {
    title: "Harry Potter and the Order of the Phoenix",
    author: "J.K. Rowling",
    publish_date: "2003",
    book_cover:
      "https://res.cloudinary.com/the-harry-potter-database/image/upload/c_fill,h_390,w_250/v1590249804/Harry_Potter_5_-_Harry_Potter_and_the_Order_of_the_Phoenix_-_Jason_Cockcroft_d9pkq3.jpg",
  },
  {
    title: "Harry Potter and the Half-Blood Prince",
    author: "J.K. Rowling",
    publish_date: "2005",
    book_cover:
      "https://res.cloudinary.com/the-harry-potter-database/image/upload/c_fill,h_390,w_250/v1590249789/Harry_Potter_6_-_Harry_Potter_and_the_Half-Blood_Prince_-_Jason_Cockcroft_gorgek.jpg",
  },
  {
    title: "Harry Potter and the Deathly Hallows",
    author: "J.K. Rowling",
    publish_date: "2007",
    book_cover:
      "https://res.cloudinary.com/the-harry-potter-database/image/upload/c_fill,h_390,w_250/v1590249805/Harry_Potter_7_-_Harry_Potter_and_the_Deathly_Hallows_-_Jason_Cockcroft_yex7ar.jpg",
  },
  {
    title: "Harry Potter and the Philosopher's Stone",
    author: "J.K. Rowling",
    publish_date: "1997",
    book_cover:
      "https://res.cloudinary.com/the-harry-potter-database/image/upload/c_fill,h_390,w_250/v1590249796/Harry_Potter_1_-_Harry_Potter_and_the_Philosophers_Stone_-_Thomas_Taylor_tkuvuf.jpg",
  },
  {
    title: "Harry Potter and the Chamber of Secrets",
    author: "J.K. Rowling",
    publish_date: "1998",
    book_cover:
      "https://res.cloudinary.com/the-harry-potter-database/image/upload/c_fill,h_390,w_250/v1590249801/Harry_Potter_2_-_Harry_Potter_and_the_Chamber_of_Secrets_-_Cliff_Wright_rkruh4.jpg",
  },
  {
    title: "Harry Potter and Prisoner of Azkaban",
    author: "J.K. Rowling",
    publish_date: "1999",
    book_cover:
      "https://res.cloudinary.com/the-harry-potter-database/image/upload/c_fill,h_390,w_250/v1590249805/Harry_Potter_3_-_Harry_Potter_and_the_Prisoner_of_Azkaban_-_Cliff_Wright.jpg_ti6wxh.jpg",
  },
  {
    title: "Harry Potter and the Goblet of Fire",
    author: "J.K. Rowling",
    publish_date: "2000",
    book_cover:
      "https://res.cloudinary.com/the-harry-potter-database/image/upload/c_fill,h_390,w_250/v1590249790/Harry_Potter_4_-_Harry_Potter_and_the_Goblet_of_Fire_-_Giles_Greenfield_lb38dj.jpg",
  },
  {
    title: "Harry Potter and the Order of the Phoenix",
    author: "J.K. Rowling",
    publish_date: "2003",
    book_cover:
      "https://res.cloudinary.com/the-harry-potter-database/image/upload/c_fill,h_390,w_250/v1590249804/Harry_Potter_5_-_Harry_Potter_and_the_Order_of_the_Phoenix_-_Jason_Cockcroft_d9pkq3.jpg",
  },
  {
    title: "Harry Potter and the Half-Blood Prince",
    author: "J.K. Rowling",
    publish_date: "2005",
    book_cover:
      "https://res.cloudinary.com/the-harry-potter-database/image/upload/c_fill,h_390,w_250/v1590249789/Harry_Potter_6_-_Harry_Potter_and_the_Half-Blood_Prince_-_Jason_Cockcroft_gorgek.jpg",
  },
  {
    title: "Harry Potter and the Deathly Hallows",
    author: "J.K. Rowling",
    publish_date: "2007",
    book_cover:
      "https://res.cloudinary.com/the-harry-potter-database/image/upload/c_fill,h_390,w_250/v1590249805/Harry_Potter_7_-_Harry_Potter_and_the_Deathly_Hallows_-_Jason_Cockcroft_yex7ar.jpg",
  },
  {
    title: "Harry Potter and the Philosopher's Stone",
    author: "J.K. Rowling",
    publish_date: "1997",
    book_cover:
      "https://res.cloudinary.com/the-harry-potter-database/image/upload/c_fill,h_390,w_250/v1590249796/Harry_Potter_1_-_Harry_Potter_and_the_Philosophers_Stone_-_Thomas_Taylor_tkuvuf.jpg",
  },
  {
    title: "Harry Potter and the Chamber of Secrets",
    author: "J.K. Rowling",
    publish_date: "1998",
    book_cover:
      "https://res.cloudinary.com/the-harry-potter-database/image/upload/c_fill,h_390,w_250/v1590249801/Harry_Potter_2_-_Harry_Potter_and_the_Chamber_of_Secrets_-_Cliff_Wright_rkruh4.jpg",
  },
  {
    title: "Harry Potter and Prisoner of Azkaban",
    author: "J.K. Rowling",
    publish_date: "1999",
    book_cover:
      "https://res.cloudinary.com/the-harry-potter-database/image/upload/c_fill,h_390,w_250/v1590249805/Harry_Potter_3_-_Harry_Potter_and_the_Prisoner_of_Azkaban_-_Cliff_Wright.jpg_ti6wxh.jpg",
  },
  {
    title: "Harry Potter and the Goblet of Fire",
    author: "J.K. Rowling",
    publish_date: "2000",
    book_cover:
      "https://res.cloudinary.com/the-harry-potter-database/image/upload/c_fill,h_390,w_250/v1590249790/Harry_Potter_4_-_Harry_Potter_and_the_Goblet_of_Fire_-_Giles_Greenfield_lb38dj.jpg",
  },
  {
    title: "Harry Potter and the Order of the Phoenix",
    author: "J.K. Rowling",
    publish_date: "2003",
    book_cover:
      "https://res.cloudinary.com/the-harry-potter-database/image/upload/c_fill,h_390,w_250/v1590249804/Harry_Potter_5_-_Harry_Potter_and_the_Order_of_the_Phoenix_-_Jason_Cockcroft_d9pkq3.jpg",
  },
  {
    title: "Harry Potter and the Half-Blood Prince",
    author: "J.K. Rowling",
    publish_date: "2005",
    book_cover:
      "https://res.cloudinary.com/the-harry-potter-database/image/upload/c_fill,h_390,w_250/v1590249789/Harry_Potter_6_-_Harry_Potter_and_the_Half-Blood_Prince_-_Jason_Cockcroft_gorgek.jpg",
  },
  {
    title: "Harry Potter and the Deathly Hallows",
    author: "J.K. Rowling",
    publish_date: "2007",
    book_cover:
      "https://res.cloudinary.com/the-harry-potter-database/image/upload/c_fill,h_390,w_250/v1590249805/Harry_Potter_7_-_Harry_Potter_and_the_Deathly_Hallows_-_Jason_Cockcroft_yex7ar.jpg",
  },
  {
    title: "Harry Potter and the Philosopher's Stone",
    author: "J.K. Rowling",
    publish_date: "1997",
    book_cover:
      "https://res.cloudinary.com/the-harry-potter-database/image/upload/c_fill,h_390,w_250/v1590249796/Harry_Potter_1_-_Harry_Potter_and_the_Philosophers_Stone_-_Thomas_Taylor_tkuvuf.jpg",
  },
  {
    title: "Harry Potter and the Chamber of Secrets",
    author: "J.K. Rowling",
    publish_date: "1998",
    book_cover:
      "https://res.cloudinary.com/the-harry-potter-database/image/upload/c_fill,h_390,w_250/v1590249801/Harry_Potter_2_-_Harry_Potter_and_the_Chamber_of_Secrets_-_Cliff_Wright_rkruh4.jpg",
  },
  {
    title: "Harry Potter and Prisoner of Azkaban",
    author: "J.K. Rowling",
    publish_date: "1999",
    book_cover:
      "https://res.cloudinary.com/the-harry-potter-database/image/upload/c_fill,h_390,w_250/v1590249805/Harry_Potter_3_-_Harry_Potter_and_the_Prisoner_of_Azkaban_-_Cliff_Wright.jpg_ti6wxh.jpg",
  },
  {
    title: "Harry Potter and the Goblet of Fire",
    author: "J.K. Rowling",
    publish_date: "2000",
    book_cover:
      "https://res.cloudinary.com/the-harry-potter-database/image/upload/c_fill,h_390,w_250/v1590249790/Harry_Potter_4_-_Harry_Potter_and_the_Goblet_of_Fire_-_Giles_Greenfield_lb38dj.jpg",
  },
  {
    title: "Harry Potter and the Order of the Phoenix",
    author: "J.K. Rowling",
    publish_date: "2003",
    book_cover:
      "https://res.cloudinary.com/the-harry-potter-database/image/upload/c_fill,h_390,w_250/v1590249804/Harry_Potter_5_-_Harry_Potter_and_the_Order_of_the_Phoenix_-_Jason_Cockcroft_d9pkq3.jpg",
  },
  {
    title: "Harry Potter and the Half-Blood Prince",
    author: "J.K. Rowling",
    publish_date: "2005",
    book_cover:
      "https://res.cloudinary.com/the-harry-potter-database/image/upload/c_fill,h_390,w_250/v1590249789/Harry_Potter_6_-_Harry_Potter_and_the_Half-Blood_Prince_-_Jason_Cockcroft_gorgek.jpg",
  },
  {
    title: "Harry Potter and the Deathly Hallows",
    author: "J.K. Rowling",
    publish_date: "2007",
    book_cover:
      "https://res.cloudinary.com/the-harry-potter-database/image/upload/c_fill,h_390,w_250/v1590249805/Harry_Potter_7_-_Harry_Potter_and_the_Deathly_Hallows_-_Jason_Cockcroft_yex7ar.jpg",
  },
];

const output = [];
for (let book of books) {
  output.push(
    <div>
      <Book data={book} />
    </div>
  );
}

console.log(output);

function App() {
  return (
    <div className="container">
      <header className="main_header">
        <h1>
          <i class="fas fa-brain"></i> &#123;bookstore&#125;
        </h1>
      </header>
      <aside className="main_aside">
        <div>
          <label for="category">Choose a category:</label>
          <br />
          <select name="category" id="category">
            <option value="harry">Harry Potter</option>
            <option value="java">Core Java</option>
            <option value="js">Java Script</option>
            <option value="mysql">MySQL</option>
            <option value="cs">Computer Science</option>
          </select>
        </div>
      </aside>
      <section className="main_section">
        <div className="all-books">{output}</div>
      </section>
    </div>
  );
}

export default App;
