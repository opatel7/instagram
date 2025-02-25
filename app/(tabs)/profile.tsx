import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    Button,
    ScrollView,
} from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import Entypo from "@expo/vector-icons/Entypo";
import Fontisto from "@expo/vector-icons/Fontisto";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AntDesign from "@expo/vector-icons/AntDesign";

const ProfileScreen = () => {
    return (
        <ThemedView style={styles.container}>
            <View style={styles.header}>
                <Entypo name="instagram" size={24} color="black" />
                <Text style={styles.headerTitle}>Instagram</Text>
            </View>
            <View style={styles.profileHeader}>
                <Image
                    source={require("@/assets/images/profile_pic.jpg")}
                    style={styles.profileImage}
                />
                <ThemedText type="title" style={{ marginTop: 10, color: "black" }}>
                    _patel0705_
                </ThemedText>
            </View>
            <View style={styles.statsContainer}>
                <Text>0 posts</Text>
                <Text>1 followers</Text>
                <Text>1 following</Text>
            </View>
            <View>
                <TouchableOpacity>
                    <Text style={styles.subText}>
                        myCloneApp, React-native application
                    </Text>
                </TouchableOpacity>
                <View style={styles.profileContainer}>
                    <Button
                        title="@_react0705_"
                        onPress={() => console.log("Instagram link pressed")}
                        color={"black"}
                    ></Button>
                </View>
            </View>

            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginHorizontal: 10,
                }}
            >
                <TouchableOpacity style={[styles.button, styles.primaryButton]}>
                    <Text style={styles.buttonText}>Edit profile</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.button, styles.secondaryButton]}>
                    <Text style={[styles.buttonText]}>Share profile</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.icons}>
                <TouchableOpacity>
                    <Fontisto name="nav-icon-grid" size={20} color="black" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <AntDesign name="videocamera" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <MaterialIcons name="account-box" size={30} color="black" />
                </TouchableOpacity>
            </View>
            <ScrollView>
                <View style={styles.imageGrid}>
                    <Image
                        source={{
                            uri: "https://www.shutterstock.com/image-photo/motivational-quotes-never-give-on-600w-2240387883.jpg",
                        }}
                        style={styles.gridImage}
                    />
                    <Image
                        source={{
                            uri: "https://wallpapersok.com/images/hd/do-it-now-black-and-white-quotes-en7gkn3mjx4plytk.jpg",
                        }}
                        style={styles.gridImage}
                    />
                    <Image
                        source={{
                            uri: "https://static.vecteezy.com/system/resources/previews/006/490/793/non_2x/a-modern-typography-quotes-if-you-never-try-you-never-know-inspirational-design-calligraphy-motivational-good-quotes-in-white-background-free-vector.jpg",
                        }}
                        style={styles.gridImage}
                    />
                    <Image
                        source={{
                            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfj0r7OpwPaUo3ybQFjntMUZjudpW4qhPJEw&s",
                        }}
                        style={styles.gridImage}
                    />
                    <Image
                        source={{
                            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS480HYLkKXl0hFGYiOeE4pU2to2vk5lHJj1w&s",
                        }}
                        style={styles.gridImage}
                    />
                    <Image
                        source={{
                            uri: "https://i.pinimg.com/736x/8f/16/b3/8f16b39b57c6d26691f06d7eea4a0c3d.jpg",
                        }}
                        style={styles.gridImage}
                    />
                    <Image
                        source={{
                            uri: "https://www.shutterstock.com/image-photo/motivational-quotes-never-give-on-600w-2240387883.jpg",
                        }}
                        style={styles.gridImage}
                    />
                    <Image
                        source={{
                            uri: "https://wallpapersok.com/images/hd/do-it-now-black-and-white-quotes-en7gkn3mjx4plytk.jpg",
                        }}
                        style={styles.gridImage}
                    />
                    <Image
                        source={{
                            uri: "https://static.vecteezy.com/system/resources/previews/006/490/793/non_2x/a-modern-typography-quotes-if-you-never-try-you-never-know-inspirational-design-calligraphy-motivational-good-quotes-in-white-background-free-vector.jpg",
                        }}
                        style={styles.gridImage}
                    />
                </View>
            </ScrollView>
        </ThemedView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: "white",
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#ddd",
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: "bold",
        fontFamily: "Times New Roman",
        marginLeft: 5,
    },
    instgram: {
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 10,
        fontSize: 25,
        fontFamily: "Times New Roman",
    },
    icons: {
        flexDirection: "row",
        width: "100%",
        height: 30,
        marginBottom: 5,
        resizeMode: "contain",
        justifyContent: "space-around",
    },
    iconImage: {},
    imageGrid: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
    },
    gridImage: {
        width: "32%",
        height: 120,
        marginBottom: 5,
    },
    profileHeader: {
        alignItems: "center",
        marginBottom: 20,
        marginTop: 10,
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    statsContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginBottom: 20,
        color: "black",
    },
    editProfile: {
        textAlign: "center",
        color: "blue",
    },
    subText: {
        marginTop: 10,
        color: "black",
        fontSize: 16,
        marginLeft: 25,
    },
    profileContainer: {
        flexDirection: "row",
        marginLeft: 20,
    },
    button: {
        backgroundColor: "#fff",
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 30,
        marginVertical: 10,
        width: "50%",
        alignItems: "center",
    },
    buttonText: {
        color: "black",
        fontSize: 16,
        fontWeight: "bold",
    },
    primaryButton: {
        marginLeft: 0,
        backgroundColor: "transparent",
        borderColor: "black",
        borderWidth: 1,
        marginRight: 5,
    },
    secondaryButton: {
        marginLeft: 0,
        backgroundColor: "transparent",
        borderColor: "black",
        borderWidth: 1,
    },
    secondaryButtonText: {
        color: "white",
    },
});

export default ProfileScreen;
