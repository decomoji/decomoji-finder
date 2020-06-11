import {
  VuexActionPayloads,
  VuexActions,
  VuexMutationPayloads
} from "@/models/Vuex";
import { CategoryName } from "@/models/CategoryName";
import { CategoriesState } from "@/models/CategoriesState";
import {
  TOGGLE_CATEGORY,
  TOGGLE_DARK_MODE,
  TOGGLE_NAME_SHOWS,
  TOGGLE_REACTED,
  UPDATE_SEARCH,
  UPDATE_SIZE
} from "./mutation-types";

export interface UiState {
  category: CategoriesState;
  dark: boolean;
  name: boolean;
  reacted: boolean;
  search: string;
  size: string;
}

export interface UiViewModel extends UiState {}

export interface UiGetters {
  viewModel: UiViewModel;
}

export type UiMutationPayloads = VuexMutationPayloads<{
  [TOGGLE_CATEGORY]: CategoryName;
  [TOGGLE_DARK_MODE]: boolean;
  [TOGGLE_NAME_SHOWS]: boolean;
  [TOGGLE_REACTED]: boolean;
  [UPDATE_SEARCH]: string;
  [UPDATE_SIZE]: string;
}>;

export type UiActionPayloads = VuexActionPayloads<{
  toggleCategory: CategoryName;
  toggleDarkMode: boolean;
  toggleNameShows: boolean;
  toggleReacted: boolean;
  updateSearch: string;
  updateSize: string;
}>;

export type UiActions = VuexActions<UiActionPayloads>;
