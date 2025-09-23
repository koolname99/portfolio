import Navbar from "./../Navbar";

function Resume() {
  return (
    <div className="App">
      <Navbar />
      <div className="flex justify-center p-4">
        <embed
          src="/resume.pdf"
          type="application/pdf"
          width="80%"
          height="800px"
        />
      </div>
    </div>
  );
}

export default Resume;
