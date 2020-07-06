import {
  DecomojiMutationPayloads as ThisMutationPayloads,
  DecomojiState as ThisState,
} from "./models";
import {
  ADD_TO_COLLECTION,
  CLEAR_COLLECTION,
  REMOVE_FROM_COLLECTION,
  RECEIVE_COLLECTION,
  REPLACE_URL_PARAMS,
  TOGGLE_DARK_MODE,
  TOGGLE_REACTED,
  TOGGLE_VERTICAL_DIVINE,
  UPDATE_CATEGORY,
  UPDATE_SEARCH,
  UPDATE_SIZE,
} from "./mutation-types";
import { clearArray, replaceArray } from "@/utilities/array";
import { MutationTree } from "vuex";
import { replaceState } from "@/utilities/replaceState";

export const mutations: MutationTree<ThisState> = {
  /**
   * 選択したデコモジをコレクションに追加する
   * @param state
   */
  [ADD_TO_COLLECTION](
    state,
    payload: ThisMutationPayloads[typeof ADD_TO_COLLECTION]
  ) {
    state.collection.splice(state.collection.length, 0, payload);
  },

  /**
   * コレクションを消去する
   * @param state
   */
  [CLEAR_COLLECTION](state) {
    clearArray(state.collection);
  },

  /**
   * 選択したデコモジをコレクションから削除する
   * @param state
   * @param payload
   */
  [REMOVE_FROM_COLLECTION](
    state,
    payload: ThisMutationPayloads[typeof REMOVE_FROM_COLLECTION]
  ) {
    const index = state.collection.findIndex(
      (item) => item.name === payload.name && item.category === payload.category
    );
    state.collection.splice(index, 1);
  },

  /**
   * コレクションを受領する
   * @param state
   * @param payload
   */
  [RECEIVE_COLLECTION](
    state,
    payload: ThisMutationPayloads[typeof RECEIVE_COLLECTION]
  ) {
    replaceArray(state.collection, ...payload);
  },

  /**
   * URLパラメータを replaceState する
   * @param _
   * @param payload
   */
  [REPLACE_URL_PARAMS](
    _,
    payload: ThisMutationPayloads[typeof REPLACE_URL_PARAMS]
  ) {
    replaceState(payload);
  },

  /**
   * ダークモードをトグルする
   * @param state
   */
  [TOGGLE_DARK_MODE](state) {
    state.dark = !state.dark;
  },

  /**
   * リアクション済みをトグルする
   * @param state
   */
  [TOGGLE_REACTED](state) {
    state.reacted = !state.reacted;
  },

  /**
   * リアクション済みをトグルする
   * @param state
   */
  [TOGGLE_VERTICAL_DIVINE](state) {
    state.vertical = !state.vertical;
  },

  /**
   * 表示カテゴリーを更新する
   * @param state
   * @param payload
   */
  [UPDATE_CATEGORY](
    state,
    payload: ThisMutationPayloads[typeof UPDATE_CATEGORY]
  ) {
    const { name, value } = payload;
    state.category[name] = value;
  },

  /**
   * 検索クエリを更新する
   * @param state
   * @param payload
   */
  [UPDATE_SEARCH](state, payload: ThisMutationPayloads[typeof UPDATE_SEARCH]) {
    state.search = payload;
  },

  /**
   * アイコンサイズを更新する
   * @param state
   * @param payload
   */
  [UPDATE_SIZE](state, payload: ThisMutationPayloads[typeof UPDATE_SIZE]) {
    state.size = payload;
  },
};
