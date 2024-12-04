import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png'; // Logo image
import MathImage from '../images/math.jpeg';
import ScienceImage from '../images/science.jpeg';
import DzongkhaImage from '../images/dzongkha.png';
import ReadingImage from '../images/reading.jpeg';
import ArtsColorsImage from '../images/arts-colors.jpeg';
import PuzzleImage from '../images/puzzle.jpeg';
import MemoryImage from '../images/memory.jpeg';
import MathChaImage from '../images/math-cha.png';
import HeroIllustration from '../images/hero-illustration.png';
import BookImage from '../images/book.png';
import RhymeImage from '../images/rhymes.png';
import PuzzleGameImage from '../images/puzzle.png';
import FunGif from '../images/fun.gif';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import '../App.css';

function HomePage() {
  return (
    <div>
      {/* Header */}
      <header className="navbar">
        <div className="logo">
          <img src={logo} alt="Kids Learn Logo" />
        </div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/courses">Courses</Link>
          <Link to="/games">Fun Games</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/login">Login</Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="text-container">
          <img src={FunGif} alt="Fun Learning GIF" className="hero-gif" />
          <h1>Welcome to Fun Learning!</h1>
          <p>Explore exciting lessons, fun games, and cool activities!</p>
          <button className="get-started-btn">Get Started</button>
        </div>
        <div>
          <img src={HeroIllustration} alt="Kids Learning Illustration" />
        </div>
      </section>

      {/* Courses Section */}
      <section className="course">
        <h2>Explore Courses</h2>
        <div className="courses">
          <div className="course-card">
            <img src={MathImage} alt="Math Fun" />
            <h3>Math Fun</h3>
            <p>Learn Numbers with games and puzzles!</p>
          </div>
          <div className="course-card">
            <img src={ScienceImage} alt="Science Adventures" />
            <h3>Science Adventures</h3>
            <p>Discover the world of science through interactive stories.</p>
          </div>
          <div className="course-card">
            <img src={DzongkhaImage} alt="Dzongkha" />
            <h3>Dzongkha</h3>
            <p>Have fun while learning about the best language in the world.</p>
          </div>
          <div className="course-card">
            <img src={ReadingImage} alt="Reading" />
            <h3>Reading</h3>
            <p>Develop reading skills with exciting stories and activities!</p>
          </div>
          <div className="course-card">
            <img src={ArtsColorsImage} alt="Arts and Colors" />
            <h3>Arts and Colors</h3>
            <p>Explore your creativity with fun arts and coloring activities!</p>
          </div>
        </div>
      </section>

      {/* Fun Games Section */}
      <section className="fun-games">
        <h2>Fun Games</h2>
        <div className="games">
          <div className="game-card">
            <img src={PuzzleImage} alt="Puzzle Game" />
            <h3>Puzzle Game</h3>
            <p>Complete the puzzle to unlock cool rewards!</p>
          </div>
          <div className="game-card">
            <img src={MemoryImage} alt="Memory Game" />
            <h3>Memory Game</h3>
            <p>Match the cards and improve your memory skills!</p>
          </div>
          <div className="game-card">
            <img src={MathChaImage} alt="Math Challenge" />
            <h3>Math Challenge</h3>
            <p>Test your math skills with fun challenges!</p>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="activities">
        <div className="activities-header">
            <h2>Activities</h2>
        </div>
        <div className="activities-content">
          {/* First Pair */}
          <div className="image-text-section">
            <div className="image-container">
              <img src={BookImage} alt="BookImage" />
            </div>
            <div className="text-container">
              <h3>Books</h3>
              <p>With more than 450 traditional and original stories and nonfiction books, YontenJang’s library opens a door to worlds of knowledge, adventure, and fun for children. Every topic in our curriculum—whether it is the sound of a letter, counting 1–100, the four seasons in the year, or regions of Bhutan—is explained in child-friendly language in one of our library books.</p>
            </div>
          </div>

          {/* Second Pair */}
          <div className="image-text-section">
            <div className="image-container">
              <img src={RhymeImage} alt="Art Activity" />
            </div>
            <div className="text-container">
              <h3>Rhymes and Music</h3>
              <p>YontenJang’s collection of rhymes and music features original rhymes about every letter of the alphabet and many other topics in our curriculum, as well as newly produced and recorded children’s classics. The variety of rhymes and music on our site not only reinforces other subjects but also introduces children to a range of musical styles and themes. Your child will love to sing and rhyme along!</p>
            </div>
          </div>

          {/* Third Pair */}
          <div className="image-text-section">
            <div className="image-container">
              <img src={PuzzleGameImage} alt="Puzzle Game" />
            </div>
            <div className="text-container">
              <h3>Engaging Puzzles</h3>
              <p>Discover hundreds of jigsaw and cutout puzzles designed to help develop problem-solving and critical thinking skills. These puzzles also assist children in remembering important concepts and skills in reading, math, science, art, social studies, and music. There are puzzles for every letter of the alphabet, sight words, stories, numbers, shapes, animals, the base-ten number system, elements of fiction stories, and many more topics.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="contact">
        <h2>Contact Us</h2>
        <form>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="footer" id="contact">
        <div className="footer-content">
          <p>© 2024 EduKids. All rights reserved.</p>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
