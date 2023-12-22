import {
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import { styles } from "./styles";
import { useState } from "react";
import { Task } from "../../components/Task";

type taskType = {
  completed: boolean;
  name: string;
};

export function Home() {
  const [taskName, setTaskName] = useState("");
  const [tasks, setTasks] = useState<taskType[]>([]);

  const handleAddNewTask = () => {
    if (!taskName || taskName.trim() == "") return;

    setTasks((prevTasks) => [
      ...prevTasks,
      {
        name: taskName,
        completed: false,
      },
    ]);

    setTaskName("");
  };

  const handleRemoveTask = (index: number) => {
    setTasks((prevTasks) => prevTasks.filter((_, i) => index !== i));
  };

  const handleCompleteTask = (index: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task, i) => {
        if (index === i) {
          task.completed = !task.completed;
        }

        return task;
      })
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.logo}
          source={require("../../../assets/Logo.png")}
        />

        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor="#808080"
            value={taskName}
            onChangeText={setTaskName}
          />

          <TouchableOpacity style={styles.buttonAdd} onPress={handleAddNewTask}>
            <Ionicons name="add-circle-outline" size={16} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.main}>
        <View style={styles.sections}>
          <TouchableOpacity style={styles.buttonText}>
            <Text style={styles.buttonTextSpan}>Criadas</Text>
            <View style={styles.badge}>
              <Text style={styles.badgeSpan}>{tasks.length}</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonText}>
            <Text style={styles.buttonTextSpan}>Concluídas</Text>
            <View style={styles.badge}>
              <Text style={styles.badgeSpan}>
                {tasks.filter((t) => t.completed).length}
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.tasksContainer}>
          <FlatList
            data={tasks}
            keyExtractor={({ name }) => name}
            renderItem={({ item, index }) => (
              <Task
                name={item.name}
                completed={item.completed}
                removeTask={() => handleRemoveTask(index)}
                completeTask={() => handleCompleteTask(index)}
                key={item.name}
              />
            )}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={() => (
              <View style={styles.emptyListContainer}>
                <Ionicons name="clipboard-outline" size={56} color="#808080" />

                <Text style={styles.listEmptyTextBold}>
                  Você ainda não tem tarefas cadastradas
                </Text>
                <Text style={styles.listEmptyText}>
                  Crie tarefas e organize seus itens a fazer
                </Text>
              </View>
            )}
          />
        </View>
      </View>
    </View>
  );
}
