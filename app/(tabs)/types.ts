// types.ts
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

export type RootTabParamList = {
  index: undefined; // Home screen
  home: undefined;
  explore: undefined; // Explore screen
  profile: undefined; // Profile screen
};

// Define the type for the navigation prop in each screen
export type HomeScreenProps = BottomTabScreenProps<RootTabParamList, 'index'>;
export type ExploreScreenProps = BottomTabScreenProps<RootTabParamList, 'explore'>;
export type ProfileScreenProps = BottomTabScreenProps<RootTabParamList, 'profile'>;
export type LoginScreenProps = BottomTabScreenProps<RootTabParamList, 'home'>;