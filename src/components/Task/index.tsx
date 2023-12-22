import { Text, TouchableOpacity, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import { styles } from "./styles";

type TaskProps = {
  name: string;
  completed: boolean;
  removeTask: () => void;
  completeTask: () => void;
};

export function Task(props: TaskProps) {
  return (
    <View style={styles.taskContainer}>
      <TouchableOpacity
        style={props.completed ? styles.undoButton : styles.completeButton}
        onPress={props.completeTask}
      >
        {props.completed && (
          <Ionicons name="checkmark" size={10} color="#fff" />
        )}
      </TouchableOpacity>

      <Text
        style={props.completed ? styles.completedTaskName : styles.taskName}
      >
        {props.name}
      </Text>

      <TouchableOpacity style={styles.trashButton} onPress={props.removeTask}>
        <Ionicons name="trash-outline" size={16} color="#808080" />
      </TouchableOpacity>
    </View>
  );
}
