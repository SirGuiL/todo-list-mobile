import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  taskContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    paddingRight: 8,
    width: "100%",
    borderColor: "#333",
    borderWidth: 1,
    borderRadius: 8,
    borderStyle: "solid",
    gap: 8,
  },
  taskName: {
    color: "#F2F2F2",
    fontSize: 14,
    lineHeight: 19.6,
    flex: 1,
  },
  completedTaskName: {
    color: "#808080",
    fontSize: 14,
    lineHeight: 19.6,
    flex: 1,
    textDecorationLine: "line-through",
  },
  completeButton: {
    borderWidth: 2,
    borderColor: "#4EA8DE",
    borderRadius: 999,
    width: 18,
    height: 18,
  },
  undoButton: {
    backgroundColor: "#5E60CE",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 999,
    width: 18,
    height: 18,
  },
  trashButton: {
    padding: 10,
  },
});
