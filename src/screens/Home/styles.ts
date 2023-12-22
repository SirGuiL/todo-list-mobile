import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1A1A",
    alignItems: "center",
  },
  header: {
    backgroundColor: "#0D0D0D",
    height: 173,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
  },
  logo: {
    width: 110,
    height: 32,
  },
  form: {
    width: "100%",
    flexDirection: "row",
    marginTop: 50,
    marginBottom: -90,
  },
  input: {
    flex: 1,
    padding: 16,
    height: 54,
    backgroundColor: "#262626",
    marginRight: 4,
    color: "#FFFFFF",
    borderRadius: 6,
  },
  buttonAdd: {
    backgroundColor: "#1E6F9F",
    padding: 18,
    borderRadius: 6,
  },

  main: {
    flex: 1,
    width: "100%",
    padding: 24,
  },
  sections: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 22,
  },
  buttonText: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingVertical: 10,
  },
  buttonTextSpan: {
    color: "#4EA8DE",
    fontSize: 14,
    fontWeight: "bold",
  },
  badge: {
    paddingHorizontal: 8,
    borderRadius: 999,
    backgroundColor: "#333",
  },
  badgeSpan: {
    color: "#D9D9D9",
    fontSize: 12,
    fontWeight: "bold",
  },
  tasksContainer: {
    flex: 1,
    marginTop: 20,
  },
  emptyListContainer: {
    padding: 20,
    alignItems: "center",
  },
  listEmptyTextBold: {
    color: "#808080",
    textAlign: "center",
    fontSize: 14,
    fontWeight: "bold",
    lineHeight: 19.6,
    marginTop: 16,
  },
  listEmptyText: {
    color: "#808080",
    textAlign: "center",
    fontSize: 14,
    lineHeight: 19.6,
  },
});
