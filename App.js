import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";

const App = () => {
  const courses = [
    {
      id: 1,
      name: "Business IT",
      image: require("./assets/BIT.jpg"),
      description: "Learn the fundamentals of techonology in business.",
      rating: 0,
    },
    {
      id: 2,
      name: "International Business",
      image: require("./assets/Business.jpg"),
      description:
        "Explore various aspects of business management and entrepreneurship.",
      rating: 0,
    },
    {
      id: 3,
      name: "Fashion Design",
      image: require("./assets/Fashion.jpg"),
      description:
        "Unleash your creativity in the world of fashion and design.",
      rating: 0,
    },
    {
      id: 4,
      name: "Information Technology",
      image: require("./assets/IT.jpg"),
      description: "learn computer science and programming.",
      rating: 0,
    },
    {
      id: 5,
      name: "Software Engineering",
      image: require("./assets/software.jpg"),
      description: "learn programming for software development.",
      rating: 0,
    },
  ];

  const [courseData, setCourseData] = useState(courses);

  const rateCourse = (id) => {
    const updatedCourses = courseData.map((course) => {
      if (course.id === id && course.rating < 6) {
        return { ...course, rating: course.rating + 1 };
      }
      return course;
    });
    setCourseData(updatedCourses);
  };

  return (
    <ScrollView style={styles.container}>
      {courseData.map((course) => (
        <View key={course.id} style={styles.courseContainer}>
          <Image source={course.image} style={styles.courseImage} />
          <Text style={styles.courseName}>{course.name}</Text>
          <Text style={styles.courseDescription}>{course.description}</Text>
          <Text style={styles.courseRating}>Rating: {course.rating}</Text>
          <TouchableOpacity
            onPress={() => rateCourse(course.id)}
            style={styles.rateButton}
          >
            <Text style={styles.rateButtonText}>Rate Course</Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    padding: 10,
  },
  courseContainer: {
    backgroundColor: "#ffffff",
    marginBottom: 5,
    borderRadius: 10,
    shadowColor: "#000",
  },
  courseImage: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  courseName: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },
  courseDescription: {
    fontSize: 16,
  },
  courseRating: {
    fontSize: 14,
    marginBottom: 20,
  },
  rateButton: {
    backgroundColor: "#007bff",
    borderRadius: 5,
    alignItems: "center",
  },
  rateButtonText: {
    color: "#ffffff",
    fontWeight: "bold",
  },
});

export default App;
