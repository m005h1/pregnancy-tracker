import React from 'react';
import { Link } from 'react-router-dom';
import './PublicationsPage.css';
import Navbar from '../components/Navbar';

const PublicationsPage = () => {
  const publicationCategories = [
    {
      title: "In Preparation",
      publications: [
        {
          id: 1,
          authors: "Piyush Bhosale, Amna Kausar, Shravani Kulkarni, & Susanta Das",
          title: "Ethics in Artificial Intelligence – Building a Responsible and Inclusive Future",
          status: "To be submitted"
        }
      ]
    },
    {
      title: "Under Review",
      publications: [
        {
          id: 2,
          authors: "Shravani Kulkarni, Piyush Bhosale, Amna Kausar, & Susanta Das",
          title: "Optimizing brain tumor detection through transfer learning – leveraging pre-trained CNN models for enhanced diagnostic accuracy",
          venue: "Encyclopedia of Modern Artificial Intelligence, IGI-Global, USA",
          isbn: "ISBN13: 9798369356388"
        },
        {
          id: 3,
          authors: "Amna Kausar, Shravani Kulkarni, Piyush Bhosale, & Susanta Das",
          title: "How does an AI 'think'?",
          venue: "Encyclopedia of Modern Artificial Intelligence, IGI-Global, USA",
          isbn: "ISBN13: 9798369356388"
        }
      ]
    },
    {
      title: "In Press/Accepted",
      publications: [
        {
          id: 4,
          authors: "Amna Kausar, Shravani Kulkarni, Piyush Bhosale, Susanta Das, & Khushbu Trivedi",
          title: "Artificial Intelligence in Gestational Diabetes Mellitus",
          venue: "Communications in Computer and Information Science (CCIS) series, Springer",
          conference: "2nd International Conference on Current Advancements in Machine Learning (ICCAML-2025)",
          date: "25-26 February 2025"
        },
        {
          id: 5,
          authors: "Amna Kausar, Shravani Kulkarni, Piyush Bhosale, Susanta Das, & Khushbu Trivedi",
          title: "Random Forests and Ensemble Methods for Diabetes",
          venue: "Lecture Notes in Networks and System, Springer",
          conference: "International Conference on Artificial Intelligence, Communication Technologies & Smart Cities (ICACS 2025)",
          date: "01 March 2025"
        },
        {
          id: 6,
          authors: "Shravani Kulkarni, Piyush Bhosale, Amna Kausar, & Susanta Das",
          title: "Breast cancer detection using MRI images: A CNN approach",
          venue: "Statistical Analysis and Graphical Visualizations of Data, Scrivener Publishing – Wiley, USA"
        }
      ]
    },
    {
      title: "Published",
      publications: [
        {
          id: 7,
          authors: "Shravani Kulkarni, Piyush Amol Bhosale, & Susanta Das",
          title: "Chapter 6: Using CNN for Brain Tumor Diagnosis: An Overview (pages 104-124)",
          doi: "DOI: 10.4018/979-8-3693-3629-8.ch006",
          book: "Future of AI in Biomedicine and Biotechnology",
          editors: "Dr. Shankar Mukundrao Khade, Dr. Raj Gaurav Mishra",
          publisher: "IGI-Global, USA",
          year: "May 2024",
          link: "https://www.igi-global.com/book/future-biomedicine-biotechnology/336539"
        },
        {
          id: 8,
          authors: "Amna Kausar, Afrah Kausar, & Susanta Das",
          title: "Chapter 14: AI in Bioinformatics and Computational Biology (pages 278-290)",
          doi: "DOI: 10.4018/979-8-3693-3629-8.ch014",
          book: "Future of AI in Biomedicine and Biotechnology",
          editors: "Dr. Shankar Mukundrao Khade, Dr. Raj Gaurav Mishra",
          publisher: "IGI-Global, USA",
          year: "May 2024",
          link: "https://www.igi-global.com/book/future-biomedicine-biotechnology/336539"
        },
        {
          id: 9,
          authors: "Shravani Kulkarni, Piyush Bhosale, Amna Kausar, & Susanta Das",
          title: "Chapter 3: Addressing Gender Disparities: Enhancing Women's Representation and Equity Across Employment Sectors (pages: 69-86)",
          doi: "DOI: 10.4018/979-8-3693-3876-6.ch003",
          book: "Dimensions of Diversity, Equity, Inclusion, and Belonging in Business",
          editors: "Dr. Suzzette Harriott",
          publisher: "IGI-Global, USA",
          year: "December 2024",
          link: "https://www.igi-global.com/book/dimensions-diversity-equity-inclusion-belonging/337732"
        },
        {
          id: 10,
          authors: "Amna Kausar, Afrah Kausar, Shravani Kulkarni, Piyush Bhosale, & Susanta Das",
          title: "Chapter 4: Gender Bias in AI - Creating discriminatory systems (pages: 87-106)",
          doi: "DOI: 10.4018/979-8-3693-3876-6.ch004",
          book: "Dimensions of Diversity, Equity, Inclusion, and Belonging in Business",
          editors: "Dr. Suzzette Harriott",
          publisher: "IGI-Global, USA",
          year: "December 2024",
          link: "https://www.igi-global.com/book/dimensions-diversity-equity-inclusion-belonging/337732"
        },
        {
          id: 11,
          authors: "Aditya Sharma, Amna Kausar, Atharva Saraf, & Susanta Das",
          title: "Chapter 13: Penetration Testing: A Way to Secure IT Industries (pages 327-342)",
          doi: "DOI: 10.4018/979-8-3693-5728-6.ch013",
          book: "Navigating Cyber-Physical Systems With Cutting-Edge Technologies",
          editors: "Dr. Ramesh Chandra Poonia & Dr. Kamal Upreti",
          publisher: "IGI-Global, USA",
          year: "December 2024",
          link: "https://www.igi-global.com/book/navigating-cyber-physical-systems-cutting/341581"
        },
        {
          id: 12,
          authors: "Amna Kausar, Afrah Kausar, & Susanta Das",
          title: "Chapter 41: Women Entrepreneurship in Education-Technology Start-ups (pages 245-248)",
          book: "Women Entrepreneurship Future Direction and Research Review",
          editors: "Dr. Subhash M. Vadgule & Dr. Meena M. Wadgule",
          publisher: "Eagle Leap Printers & Publisher Pvt. Ltd., Pune, India",
          year: "June 2024",
          isbn: "ISBN: 978-81-972597-3-9"
        },
        {
          id: 13,
          authors: "Susanta Das, Shravani Kulkarni, Jenisia Dsouza, Piyush Bhosale, Ritul Dhanwade, Khushbu Trivedi, Parineeta Khelkar, Debanjali Barman Roy, & Ranjit Kumar",
          title: "Visualization and statistical analysis of research pillar of top five THE (Times Higher Education) ranked universities for the years 2020-2023 (pages: 205-217)",
          venue: "Semantic Intelligence, Springer Nature",
          link: "https://link.springer.com/chapter/10.1007/978-981-97-7356-5_18",
          editors: "Dr. Sarika Jain, Dr. Nandana Mihindukulasooriya, Valentina Janev, Cogan Matthew Shimizu",
          publisher: "Springer",
          year: "2023",
          isbn: "Hardcover ISBN: 978-981-97-7355-8"
        },
        {
          id: 14,
          authors: "Khushbu Trivedi, Jenisia Dsouza, Vatsal Saxena, Shivam Kumar, Shravani Kulkarni, & Susanta Das, Parineeta Kelkar, Piyush Bhosale, Ritul Dhanwade",
          title: "Admission Prediction for Universities using Decision Tree Algorithm and Support Vector Machine (pages: 195-203)",
          venue: "Semantic Intelligence, Springer Nature",
          link: "https://link.springer.com/chapter/10.1007/978-981-97-7356-5_17",
          editors: "Dr. Sarika Jain, Dr. Nandana Mihindukulasooriya, Valentina Janev, Cogan Matthew Shimizu",
          publisher: "Springer",
          year: "December 2024"
        },
        {
          id: 15,
          authors: "Susanta Das, Jenisia Dsouza, Shravani Kulkarni, Khushbu Trivedi, Shantanu Kumar Das, Piyush Bhosale, Ritul Dhanwade, Arghyarupa Patra, & Parineeta Kelkar",
          title: "Global Citations and International Reach: A Comparative Study of Top 5 THE Ranked Universities (2020-2023)",
          venue: "IEEE Xplore",
          doi: "DOI: 10.1109/ICWITE59797.2024.10503256",
          conference: "International Conference for Women in Innovation, Technology and Entrepreneurship (ICWITE)",
          date: "16-17 February 2024",
          link: "https://ieeexplore.ieee.org/document/10503256"
        },
        {
          id: 16,
          authors: "Khushbu Trivedi, Debanjali Barman Roy, Shravani Kulkarni, Pooja Dehankar, Parineeta Kelkar, Piyush Bhosale, & Susanta Das",
          title: "Contributions of Women to Cloud Computing: Fostering a diverse and inclusive community",
          venue: "IEEE Xplore",
          doi: "DOI: 10.1109/ICWITE59797.2024.10503054",
          conference: "2024 IEEE International Conference for Women in Innovation, Technology and Entrepreneurship (ICWITE)",
          date: "16-17 February 2024",
          link: "https://ieeexplore.ieee.org/document/10503054"
        },
        {
          id: 17,
          authors: "Jenisia Dsouza, Afrah Kausar, Ritul Dhanwade, Khushbu Trivedi, Geetika Kanwar, Shravani Kulkarni, Piyush Bhosale, Susanta Das",
          title: "A review of overall scores and key statistics of the top five ranked universities of Times Higher Education World University Rankings for the years 2020-2023",
          venue: "IEEE Xplore",
          doi: "DOI: 10.1109/ICICIS56802.2023.10430236",
          conference: "1st International Conference on Integration of Computational Intelligence System (ICICIS2023)",
          date: "1-4 November 2023",
          link: "https://ieeexplore.ieee.org/document/10430236"
        }
      ]
    }
  ];

  return (
    <div className="publications-container">
      <Navbar />
      
      <header className="publications-hero">
        <div className="hero-content">
          <h1>Research Publications</h1>
          <p className="hero-subtitle">
            Contributions to AI mainly in healthcare and biomedical research
          </p>
        </div>
      </header>

      <main className="publications-content">
        {publicationCategories.map((category) => (
          <section key={category.title} className="publication-category">
            <h2 className="category-title">{category.title}</h2>
            <div className="publication-list">
              {category.publications.map((pub) => (
                <div key={pub.id} className="publication-card">
                  <div className="publication-badge">{pub.id}</div>
                  <div className="publication-details">
                    <h3>{pub.title}</h3>
                    <p className="authors">{pub.authors}</p>
                    
                    {pub.venue && (
                      <p className="venue">
                        <strong>Venue:</strong> {pub.venue}
                        {pub.isbn && <span> ({pub.isbn})</span>}
                      </p>
                    )}

                    {pub.conference && (
                      <p className="conference">
                        <strong>Conference:</strong> {pub.conference}, {pub.date}
                      </p>
                    )}

                    {pub.book && (
                      <p className="book-info">
                        <strong>Book:</strong> {pub.book} {pub.editors && `(Eds: ${pub.editors})`}
                      </p>
                    )}

                    {pub.doi && <p className="doi">{pub.doi}</p>}
                    {pub.publisher && <p className="publisher">{pub.publisher}, {pub.year}</p>}

                    {pub.link && (
                      <a 
                        href={pub.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="publication-link"
                      >
                        View Publication →
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </main>

      <footer className="landing-footer">
        <p>For full citation details or reprint requests, please contact us.</p>
        <div className="footer-links">
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms of Service</Link>
        </div>
      </footer>
    </div>
  );
};

export default PublicationsPage;