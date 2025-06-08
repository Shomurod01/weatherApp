import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const AboutCreator = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Weather World — Final Project Overview</Text>

      <View style={styles.section}>
        <Text style={styles.title}>Creator Info</Text>
        <Text style={styles.text}>
          Name: <Text style={styles.bold}>Shomurod Mamadjonov</Text>
        </Text>
        <Text style={styles.text}>
          Student ID: <Text style={styles.bold}>40470</Text>
        </Text>
        <Text style={styles.text}>
          Course:{" "}
          <Text style={styles.bold}>Mobile Devices Programming Languages</Text>
        </Text>
        <Text style={styles.text}>
          Group: <Text style={styles.bold}>L1</Text>
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>About the Project</Text>
        <Text style={styles.text}>
          Weather World is a fully responsive weather forecast app built using{" "}
          <Text style={styles.bold}>React Native</Text> and{" "}
          <Text style={styles.bold}>Expo SDK 53</Text>. It uses{" "}
          <Text style={styles.bold}>TypeScript</Text> for safety,{" "}
          <Text style={styles.bold}>Redux</Text> and{" "}
          <Text style={styles.bold}>Context API</Text> for state management, and
          follows <Text style={styles.bold}>SOLID principles</Text>.
        </Text>
        <Text style={styles.text}>
          I also implemented unit tests, handled different screen sizes,
          followed modern architecture, and respected code quality standards
          with ESLint and Prettier.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Implemented Requirements</Text>
        {[
          "1. Application Architecture",
          "2. Screen Responsiveness",
          "3. Code Quality (SOLID, Prettier)",
          "4. Unit Testing (Jest, Testing Library)",
          "5. Documentation & Clean Code",
          ,
          "6. Async Operations (fetch, async/await)",
          "7. Navigation (React Navigation)",
          "8. Performance Optimization",
          "9. UI/UX Design",
          "10. State Management (Redux)",
          "11. Error Handling",
          "12. Security Measures",
          "13. Deployment (.apk build, EAS Build)",
        ].map((item, index) => (
          <Text key={index} style={styles.success}>
            * {item}
          </Text>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Folder Structure</Text>
        <Text style={styles.text}>
          My app follows a modular folder structure with clear separation of
          concerns:
        </Text>
        <Text style={styles.codeBlock}>
          /components{"\n"}
          /screens{"\n"}
          /store (Redux slices, setup){"\n"}
          /constants{"\n"}
          /types{"\n"}
          /ThemeContext.tsx
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Summary</Text>
        <Text style={styles.text}>
          I enjoyed developing this app and gained practical experience in
          mobile app architecture, testing, native integration, and deployment.
          All requirements were met, and I’m confident in the scalability and
          maintainability of my code.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 16,
    color: "#1E88E5",
  },
  section: {
    marginBottom: 24,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#3949AB",
  },
  text: {
    fontSize: 16,
    marginBottom: 6,
    color: "#444",
  },
  bold: {
    fontWeight: "bold",
    color: "#000",
  },
  success: {
    fontSize: 16,
    marginBottom: 4,
    color: "#2E7D32", // green
  },
  codeBlock: {
    backgroundColor: "#F5F5F5",
    padding: 10,
    fontFamily: "monospace",
    borderRadius: 6,
    color: "#333",
    marginTop: 8,
  },
});

export default AboutCreator;
