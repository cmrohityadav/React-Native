import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      {/* Static Routes */}
      <Link href={"/about"}>Go to About</Link>
      <Link href={"/details"}>Go to Detail</Link>
      <Link href={"/overview"}>Go to Index Over view</Link>
      <Link href={"/overview/user"}>Go to Index User</Link>

      {/* Dynamic Routes */}
      <Link href={"/user/123456"}>Go to userId page</Link>
      <Link href={"/user/987456"}>Go to ProductId page</Link>
      <Link href={"/userProfile/123/profile/987"}>To to Profile ID</Link>

      {/* Catch All Routes */}

      <Link href={"/docs/username/setting/network/wifi"}>Catch All Routes</Link>

      {/* Route Groups */}

      <Link href={"/analytics"}>Routes Group</Link>


      {/*  layout system & Slot */}
      <Link href={"/(auth)/signIn"}>Sign In</Link>
      <Link href={"/(auth)/signUp"}>Sign UP</Link>

    </View>
  );
}
