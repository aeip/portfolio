import { useState } from "react";
import { SegmentedControl } from "segmented-control-react";
import Development from './Development';
import Design from './Design';

const Projects = () => {
  const [selectedSegment, setSelectedSegment] = useState(0);
  function handleChange(index) {
    setSelectedSegment(index);
  }
  return (
    <div className="projects">
      <h1>Projects</h1>
      <SegmentedControl
        variant="light"
        selected={selectedSegment}
        onChangeSegment={handleChange}
        segments={[
          {
            name: "Development",
          },
          {
            name: "Design",
          },
        ]}
      />
      {selectedSegment === 0 ? (
        <Development />
      ) : (
        <Design />
      )}
    </div>
  );
};

export default Projects;
