const STANDARD_STALE_TIME = 1 * 60 * 1000;
const GIF_STALE_TIME = 12 * 60 * 1000;
const CACHE_KEY_GIFS = ['gifs'];
const CACHE_KEY_FRIENDS = ['friends'];
const CACHE_KEY_PLAYER_FRIENDS = ['playerFriends'];
const CACHE_KEY_PLAYER = ['player'];
const CACHE_KEY_TWEETS = ['tweets'];
const CACHE_KEY_COMMENTS = ['comments'];
const CACHE_KEY_PLAYERS = ['players'];
const CACHE_KEY_CONVERSATIONS = ['conversations'];
const CACHE_KEY_MEMBERS = ['members'];
const CACHE_KEY_MESSAGES = ['messages'];
const CACHE_KEY_BOOKMARKS = ['bookmarks'];
const CACHE_KEY_CHATS = ['chats'];
const CACHE_KEY_ME = ['me'];
const PLACEHOLDER_PROFILE_IMAGE = 'https://picsum.photos/id/40/4106/2806';
const JWT_EXPIRATION_TIME = '30 days from now';
const SESSION_EXPIRATION_TIME = 30 * 24 * 3600 * 1000;
const TOAST_KEY_ANNOUNCE = 'announcement';
const TOAST_KEY_AUTH = 'auth';

export {
  CACHE_KEY_BOOKMARKS,
  CACHE_KEY_CHATS,
  CACHE_KEY_COMMENTS,
  CACHE_KEY_CONVERSATIONS,
  CACHE_KEY_FRIENDS,
  CACHE_KEY_GIFS,
  CACHE_KEY_ME,
  CACHE_KEY_MEMBERS,
  CACHE_KEY_MESSAGES,
  CACHE_KEY_PLAYER,
  CACHE_KEY_PLAYERS,
  CACHE_KEY_PLAYER_FRIENDS,
  CACHE_KEY_TWEETS,
  GIF_STALE_TIME,
  JWT_EXPIRATION_TIME,
  PLACEHOLDER_PROFILE_IMAGE,
  SESSION_EXPIRATION_TIME,
  STANDARD_STALE_TIME,
  TOAST_KEY_ANNOUNCE,
  TOAST_KEY_AUTH
};
