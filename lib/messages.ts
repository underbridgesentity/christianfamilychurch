// Message + series catalogue, sourced from the CFC YouTube channel
// (@CFCIJohannesburg). Series mirror the channel's playlists; each message
// carries its real YouTube video id, so thumbnails come straight from YouTube.
// When Payload CMS is wired up these become the seed values.

export type Message = {
  id: string;
  title: string;
  /** Optional part label within a series, e.g. "Part 2" */
  part?: string;
  speaker: string;
  /** Human-readable date, e.g. "21 June 2026" ("" when the source has none) */
  date: string;
  /** Short date used on cards, e.g. "21 Jun 2026" */
  shortDate: string;
  /** Slug of the owning series (matches Series.slug) */
  series: string;
  /** Display name of the owning series */
  seriesName: string;
  campus: string;
  /** YouTube video id — drives the embed and the thumbnail */
  youtubeId: string;
};

export type Series = {
  slug: string;
  name: string;
  /** Source YouTube playlist id */
  playlistId: string;
  /** First video of the playlist — used for the cover art */
  coverVideoId: string;
  /** Gradient tint laid over the cover art */
  tint: string;
  count: number;
};

export const series: Series[] = [
  { slug: "the-book-of-galatians", name: "The Book of Galatians", playlistId: "PLc9Z8F-iEmBpaxFJTIwMnN7LoaxBapzZt", coverVideoId: "7XyQbXY4Xeo", tint: "rgba(20,33,63,.42)", count: 2 },
  { slug: "the-god-of-overflow", name: "The God of Overflow", playlistId: "PLc9Z8F-iEmBoR9aBMV1nReF31bZtqKYaX", coverVideoId: "75NRkLN4Yn0", tint: "rgba(46,107,230,.45)", count: 5 },
  { slug: "understanding-the-power-of-praise", name: "Understanding the Power of Praise", playlistId: "PLc9Z8F-iEmBqYY7tqgd5pzurWpft_GMTm", coverVideoId: "l8LSMDWIqb0", tint: "rgba(124,58,200,.42)", count: 4 },
  { slug: "song-of-solomon", name: "Song of Solomon", playlistId: "PLc9Z8F-iEmBqh-v7lIPccJOtUXsosdJFu", coverVideoId: "8EWDHbOEziI", tint: "rgba(20,90,120,.45)", count: 4 },
  { slug: "the-power-of-the-incorruptible-seed", name: "The Power of the Incorruptible Seed", playlistId: "PLc9Z8F-iEmBptr26lq5pSqrJ6I_vVk-0h", coverVideoId: "wUKJ5k5OIxQ", tint: "rgba(231,76,60,.40)", count: 6 },
  { slug: "the-power-of-the-renewed-mind", name: "The Power of the Renewed Mind", playlistId: "PLc9Z8F-iEmBoLersUyHfEPV03WINlhBdm", coverVideoId: "8JaRvimskhs", tint: "rgba(11,24,48,.55)", count: 7 },
  { slug: "how-to-take-the-lead", name: "How to Take the Lead", playlistId: "PLc9Z8F-iEmBrjh2RZuoYXAKuU1Mfc2kmj", coverVideoId: "x7A1Uyi8kzk", tint: "rgba(8,18,38,.5)", count: 3 },
  { slug: "disciple", name: "Disciple — The Journey to Spiritual Growth", playlistId: "PLc9Z8F-iEmBqgBWRMd1tCYgcMmY_7PoYI", coverVideoId: "BWMuk0Q0FVU", tint: "rgba(20,33,63,.42)", count: 7 },
  { slug: "winter-at-cfc", name: "Winter at CFC", playlistId: "PLc9Z8F-iEmBplg1i8n2VMr5izpy4U7Yqc", coverVideoId: "Ly3NGY_nXYM", tint: "rgba(46,107,230,.45)", count: 5 },
  { slug: "i-have-decided", name: "I Have Decided", playlistId: "PLc9Z8F-iEmBrTmYq1FMt4w-Y2U06tJwFW", coverVideoId: "_fHizoPuKJk", tint: "rgba(124,58,200,.42)", count: 5 },
  { slug: "marriage-life-money-hope", name: "Marriage Series: Life · Money · Hope", playlistId: "PLc9Z8F-iEmBpArrg_FyKBzwyeYOkRb_MM", coverVideoId: "SM2Or8olva4", tint: "rgba(20,90,120,.45)", count: 5 },
  { slug: "what-the-bible-is-all-about", name: "What the Bible Is All About", playlistId: "PLc9Z8F-iEmBom7LUvvsl_EddGb_iI73kR", coverVideoId: "VeoGk9umKLI", tint: "rgba(231,76,60,.40)", count: 4 },
  { slug: "world-outside-your-window", name: "World Outside Your Window", playlistId: "PLc9Z8F-iEmBqC89rJbZd2gTH0vVUxirJQ", coverVideoId: "QsHBgxRF-EU", tint: "rgba(11,24,48,.55)", count: 3 },
  { slug: "miracles-of-jesus", name: "Miracles of Jesus", playlistId: "PLc9Z8F-iEmBqYeFMQCiBLIpyA8E0xxjEv", coverVideoId: "M1r3nFxpugY", tint: "rgba(8,18,38,.5)", count: 2 },
  { slug: "the-time-of-josephs-blessing", name: "2025 — The Time of Joseph's Blessing", playlistId: "PLc9Z8F-iEmBoUQGhfZgqZZwqMxxt-5VoO", coverVideoId: "dLZwtzU3Yhg", tint: "rgba(20,33,63,.42)", count: 2 },
];

export const messages: Message[] = [
  { id: "say-yes-to-gods-bigger-plan", title: "Say Yes to God's Bigger Plan", speaker: "Dr Beverley Wolmarans", date: "21 June 2026", shortDate: "21 Jun 2026", series: "sunday-service", seriesName: "Sunday Service", campus: "CFC Johannesburg", youtubeId: "S1e22FkyVxw" },
  { id: "the-book-of-galatians-part-2", title: "The Book of Galatians", part: "Part 2", speaker: "Apostle Theo Wolmarans", date: "14 June 2026", shortDate: "14 Jun 2026", series: "the-book-of-galatians", seriesName: "The Book of Galatians", campus: "CFC Johannesburg", youtubeId: "7XyQbXY4Xeo" },
  { id: "the-book-of-galatians-part-1", title: "The Book of Galatians", part: "Part 1", speaker: "Apostle Theo Wolmarans", date: "7 June 2026", shortDate: "7 Jun 2026", series: "the-book-of-galatians", seriesName: "The Book of Galatians", campus: "CFC Johannesburg", youtubeId: "0FvrbYcvSQI" },
  { id: "the-god-of-overflow-part-5", title: "The God of Overflow", part: "Part 5", speaker: "Apostle Theo Wolmarans", date: "3 May 2026", shortDate: "3 May 2026", series: "the-god-of-overflow", seriesName: "The God of Overflow", campus: "CFC Johannesburg", youtubeId: "75NRkLN4Yn0" },
  { id: "the-god-of-overflow-part-4", title: "The God of Overflow", part: "Part 4", speaker: "Apostle Theo Wolmarans", date: "26 April 2026", shortDate: "26 Apr 2026", series: "the-god-of-overflow", seriesName: "The God of Overflow", campus: "CFC Johannesburg", youtubeId: "qr1tJsitXp8" },
  { id: "the-god-of-overflow-part-3", title: "The God of Overflow", part: "Part 3", speaker: "Apostle Theo Wolmarans", date: "19 April 2026", shortDate: "19 Apr 2026", series: "the-god-of-overflow", seriesName: "The God of Overflow", campus: "CFC Johannesburg", youtubeId: "garsFRkQhA4" },
  { id: "the-god-of-overflow-part-2", title: "The God of Overflow", part: "Part 2", speaker: "Apostle Theo Wolmarans", date: "12 April 2026", shortDate: "12 Apr 2026", series: "the-god-of-overflow", seriesName: "The God of Overflow", campus: "CFC Johannesburg", youtubeId: "yABZzdpA_uI" },
  { id: "understanding-the-power-or-benefits-of-praising-god", title: "Understanding the Power or Benefits of Praising God", speaker: "Apostle Theo Wolmarans", date: "29 March 2026", shortDate: "29 Mar 2026", series: "understanding-the-power-of-praise", seriesName: "Understanding the Power of Praise", campus: "CFC Johannesburg", youtubeId: "l8LSMDWIqb0" },
  { id: "the-god-of-overflow-part-1", title: "The God of Overflow", part: "Part 1", speaker: "Apostle Theo Wolmarans", date: "15 March 2026", shortDate: "15 Mar 2026", series: "the-god-of-overflow", seriesName: "The God of Overflow", campus: "CFC Johannesburg", youtubeId: "sAKNpRvxbW4" },
  { id: "how-to-fight-right-part-4", title: "How to Fight Right", part: "Part 4", speaker: "Teacher Paul", date: "8 March 2026", shortDate: "8 Mar 2026", series: "song-of-solomon", seriesName: "Song of Solomon", campus: "CFC Johannesburg", youtubeId: "8EWDHbOEziI" },
  { id: "sex-and-intimacy-part-3", title: "Sex and Intimacy", part: "Part 3", speaker: "Dr. Andre Wilmans", date: "1 March 2026", shortDate: "1 Mar 2026", series: "song-of-solomon", seriesName: "Song of Solomon", campus: "CFC Johannesburg", youtubeId: "zr9_vzZYJYI" },
  { id: "dating-and-purity-part-2", title: "Dating and Purity", part: "Part 2", speaker: "Ps. Evert Boshoff", date: "22 February 2026", shortDate: "22 Feb 2026", series: "song-of-solomon", seriesName: "Song of Solomon", campus: "CFC Johannesburg", youtubeId: "yieFOVWw1Lw" },
  { id: "order-of-attraction-part-1", title: "Order of Attraction", part: "Part 1", speaker: "Ps. Greg Thomaz", date: "15 February 2026", shortDate: "15 Feb 2026", series: "song-of-solomon", seriesName: "Song of Solomon", campus: "CFC Johannesburg", youtubeId: "DKTGoDrlt20" },
  { id: "understanding-the-power-of-praise-part-4", title: "Understanding the Power of Praise", part: "Part 4", speaker: "Apostle Theo Wolmarans", date: "8 February 2026", shortDate: "8 Feb 2026", series: "understanding-the-power-of-praise", seriesName: "Understanding the Power of Praise", campus: "CFC Johannesburg", youtubeId: "gyGw1vTxQK0" },
  { id: "understanding-the-power-of-praise-part-3", title: "Understanding the Power of Praise", part: "Part 3", speaker: "Apostle Theo Wolmarans", date: "1 February 2026", shortDate: "1 Feb 2026", series: "understanding-the-power-of-praise", seriesName: "Understanding the Power of Praise", campus: "CFC Johannesburg", youtubeId: "LKaFa8_Rjhw" },
  { id: "understanding-the-power-of-praise-part-2", title: "Understanding the Power of Praise", part: "Part 2", speaker: "Apostle Theo Wolmarans", date: "25 January 2026", shortDate: "25 Jan 2026", series: "understanding-the-power-of-praise", seriesName: "Understanding the Power of Praise", campus: "CFC Johannesburg", youtubeId: "PuSVZPH40XQ" },
  { id: "the-power-of-the-incorruptible-seed-part-6", title: "The Power of the Incorruptible Seed", part: "Part 6", speaker: "Apostle Theo Wolmarans", date: "August 2025", shortDate: "Aug 2025", series: "the-power-of-the-incorruptible-seed", seriesName: "The Power of the Incorruptible Seed", campus: "CFC Johannesburg", youtubeId: "wUKJ5k5OIxQ" },
  { id: "the-power-of-the-incorruptible-seed-part-5", title: "The Power of the Incorruptible Seed", part: "Part 5", speaker: "Apostle Theo Wolmarans", date: "June 2025", shortDate: "Jun 2025", series: "the-power-of-the-incorruptible-seed", seriesName: "The Power of the Incorruptible Seed", campus: "CFC Johannesburg", youtubeId: "HcbvPHtE4MQ" },
  { id: "the-power-of-the-incorruptible-seed-part-4", title: "The Power of the Incorruptible Seed", part: "Part 4", speaker: "Apostle Theo Wolmarans", date: "June 2025", shortDate: "Jun 2025", series: "the-power-of-the-incorruptible-seed", seriesName: "The Power of the Incorruptible Seed", campus: "CFC Johannesburg", youtubeId: "4XOke4Lle7A" },
  { id: "the-power-of-the-incorruptible-seed-part-3", title: "The Power of the Incorruptible Seed", part: "Part 3", speaker: "Apostle Theo Wolmarans", date: "June 2025", shortDate: "Jun 2025", series: "the-power-of-the-incorruptible-seed", seriesName: "The Power of the Incorruptible Seed", campus: "CFC Johannesburg", youtubeId: "two9_tT5IzY" },
  { id: "the-power-of-the-incorruptible-seed-part-2", title: "The Power of the Incorruptible Seed", part: "Part 2", speaker: "Apostle Theo Wolmarans", date: "May 2025", shortDate: "May 2025", series: "the-power-of-the-incorruptible-seed", seriesName: "The Power of the Incorruptible Seed", campus: "CFC Johannesburg", youtubeId: "MZE6kuXE2rk" },
  { id: "the-power-of-the-incorruptible-seed-part-1", title: "The Power of the Incorruptible Seed", part: "Part 1", speaker: "Apostle Theo Wolmarans", date: "May 2025", shortDate: "May 2025", series: "the-power-of-the-incorruptible-seed", seriesName: "The Power of the Incorruptible Seed", campus: "CFC Johannesburg", youtubeId: "V8kNG8CmbFE" },
  { id: "the-power-of-the-renewed-mind-part-5c", title: "The Power of the Renewed Mind", part: "Part 5C", speaker: "Apostle Theo Wolmarans", date: "March 2025", shortDate: "Mar 2025", series: "the-power-of-the-renewed-mind", seriesName: "The Power of the Renewed Mind", campus: "CFC Johannesburg", youtubeId: "8JaRvimskhs" },
  { id: "the-power-of-the-renewed-mind-part-5b", title: "The Power of the Renewed Mind", part: "Part 5B", speaker: "Apostle Theo Wolmarans", date: "March 2025", shortDate: "Mar 2025", series: "the-power-of-the-renewed-mind", seriesName: "The Power of the Renewed Mind", campus: "CFC Johannesburg", youtubeId: "0pebV945hsg" },
  { id: "the-power-of-the-renewed-mind-part-5a", title: "The Power of the Renewed Mind", part: "Part 5A", speaker: "Apostle Theo Wolmarans", date: "March 2025", shortDate: "Mar 2025", series: "the-power-of-the-renewed-mind", seriesName: "The Power of the Renewed Mind", campus: "CFC Johannesburg", youtubeId: "5aIQE5vxvwc" },
  { id: "the-power-of-the-renewed-mind-part-4", title: "The Power of the Renewed Mind", part: "Part 4", speaker: "Apostle Theo Wolmarans", date: "February 2025", shortDate: "Feb 2025", series: "the-power-of-the-renewed-mind", seriesName: "The Power of the Renewed Mind", campus: "CFC Johannesburg", youtubeId: "_5-Ju-lSyYY" },
  { id: "the-power-of-the-renewed-mind-part-3", title: "The Power of the Renewed Mind", part: "Part 3", speaker: "Apostle Theo Wolmarans", date: "February 2025", shortDate: "Feb 2025", series: "the-power-of-the-renewed-mind", seriesName: "The Power of the Renewed Mind", campus: "CFC Johannesburg", youtubeId: "s9pkJ2Wc-II" },
  { id: "the-power-of-the-renewed-mind-part-2", title: "The Power of the Renewed Mind", part: "Part 2", speaker: "Apostle Theo Wolmarans", date: "January 2025", shortDate: "Jan 2025", series: "the-power-of-the-renewed-mind", seriesName: "The Power of the Renewed Mind", campus: "CFC Johannesburg", youtubeId: "A5cawtsbReI" },
  { id: "the-power-of-the-renewed-mind-part-1", title: "The Power of the Renewed Mind", part: "Part 1", speaker: "Apostle Theo Wolmarans", date: "December 2024", shortDate: "Dec 2024", series: "the-power-of-the-renewed-mind", seriesName: "The Power of the Renewed Mind", campus: "CFC Johannesburg", youtubeId: "jsIT5zlomCk" },
  { id: "how-to-take-lead-part-3", title: "How to Take Lead", part: "Part 3", speaker: "Apostle Theo Wolmarans", date: "24 November 2024", shortDate: "24 Nov 2024", series: "how-to-take-the-lead", seriesName: "How to Take the Lead", campus: "CFC Johannesburg", youtubeId: "x7A1Uyi8kzk" },
  { id: "how-to-take-lead-part-2", title: "How to Take Lead", part: "Part 2", speaker: "Apostle Theo Wolmarans", date: "17 November 2024", shortDate: "17 Nov 2024", series: "how-to-take-the-lead", seriesName: "How to Take the Lead", campus: "CFC Johannesburg", youtubeId: "GhBPvUzpJZc" },
  { id: "how-to-take-lead-part-1", title: "How to Take Lead", part: "Part 1", speaker: "Apostle Theo Wolmarans", date: "20 October 2024", shortDate: "20 Oct 2024", series: "how-to-take-the-lead", seriesName: "How to Take the Lead", campus: "CFC Johannesburg", youtubeId: "k4RAZXGs95I" },
  { id: "spirit-empowered-life-part-7", title: "Spirit Empowered Life", part: "Part 7", speaker: "Ps. Jenny Roche", date: "", shortDate: "", series: "disciple", seriesName: "Disciple — The Journey to Spiritual Growth", campus: "CFC Johannesburg", youtubeId: "BWMuk0Q0FVU" },
  { id: "bearing-good-fruit-part-6", title: "Bearing Good Fruit", part: "Part 6", speaker: "Ps. Greg Thomaz", date: "", shortDate: "", series: "disciple", seriesName: "Disciple — The Journey to Spiritual Growth", campus: "CFC Johannesburg", youtubeId: "LaN0YSoAj-I" },
  { id: "spiritual-gifts-part-5", title: "Spiritual Gifts", part: "Part 5", speaker: "Teacher Paul", date: "", shortDate: "", series: "disciple", seriesName: "Disciple — The Journey to Spiritual Growth", campus: "CFC Johannesburg", youtubeId: "xcXUeuHffQk" },
  { id: "planted-in-the-local-church-part-4", title: "Planted in the Local Church", part: "Part 4", speaker: "Dr. Johnny. S", date: "", shortDate: "", series: "disciple", seriesName: "Disciple — The Journey to Spiritual Growth", campus: "CFC Johannesburg", youtubeId: "Faln2gMQ4A4" },
  { id: "love-one-another-part-3", title: "Love One Another", part: "Part 3", speaker: "Dr. Andre Wilmans", date: "", shortDate: "", series: "disciple", seriesName: "Disciple — The Journey to Spiritual Growth", campus: "CFC Johannesburg", youtubeId: "TytJJ_pM4yU" },
  { id: "daily-time-with-god-part-2", title: "Daily Time with God", part: "Part 2", speaker: "Ps. Greg Thomaz", date: "", shortDate: "", series: "disciple", seriesName: "Disciple — The Journey to Spiritual Growth", campus: "CFC Johannesburg", youtubeId: "02D8jhMSA-A" },
  { id: "god-has-more-part-1", title: "God Has More", part: "Part 1", speaker: "Ps. Clive Nyakudzi", date: "", shortDate: "", series: "disciple", seriesName: "Disciple — The Journey to Spiritual Growth", campus: "CFC Johannesburg", youtubeId: "UvonvEhjtOY" },
  { id: "god-s-assignment-part-5", title: "God's Assignment", part: "Part 5", speaker: "Dr. Johnny Slabbert", date: "", shortDate: "", series: "winter-at-cfc", seriesName: "Winter at CFC", campus: "CFC Johannesburg", youtubeId: "Ly3NGY_nXYM" },
  { id: "how-to-grow-your-influence-part-4", title: "How to Grow your Influence", part: "Part 4", speaker: "Ps. Clive Nyakudzi", date: "", shortDate: "", series: "winter-at-cfc", seriesName: "Winter at CFC", campus: "CFC Johannesburg", youtubeId: "71fqM_pHF10" },
  { id: "choose-to-rejoice-part-3", title: "Choose to Rejoice", part: "Part 3", speaker: "Ps. Jenny Roche", date: "", shortDate: "", series: "winter-at-cfc", seriesName: "Winter at CFC", campus: "CFC Johannesburg", youtubeId: "m3k92QgkzdQ" },
  { id: "the-joy-of-the-lord-is-my-strength-part-2", title: "The Joy of the Lord is My Strength", part: "Part 2", speaker: "Dr. Andre Wilmans", date: "", shortDate: "", series: "winter-at-cfc", seriesName: "Winter at CFC", campus: "CFC Johannesburg", youtubeId: "y1K4xLWPgjo" },
  { id: "comfortably-committed-part-1", title: "Comfortably Committed?", part: "Part 1", speaker: "Dr. Andre Wilmans", date: "", shortDate: "", series: "winter-at-cfc", seriesName: "Winter at CFC", campus: "CFC Johannesburg", youtubeId: "oqDpQTm69LU" },
  { id: "to-make-everything-count-part-4", title: "To Make Everything Count", part: "Part 4", speaker: "Ps. Clive Nyakudzi", date: "", shortDate: "", series: "i-have-decided", seriesName: "I Have Decided", campus: "CFC Johannesburg", youtubeId: "_fHizoPuKJk" },
  { id: "to-live-my-life-on-purpose-part-3b", title: "To Live My Life on Purpose", part: "Part 3B", speaker: "Ps. Jenny Roche", date: "", shortDate: "", series: "i-have-decided", seriesName: "I Have Decided", campus: "CFC Johannesburg", youtubeId: "YQLRguBm84w" },
  { id: "to-live-my-life-on-purpose-part-3a", title: "To Live My Life on Purpose", part: "Part 3A", speaker: "Ps. Jenny Roche", date: "", shortDate: "", series: "i-have-decided", seriesName: "I Have Decided", campus: "CFC Johannesburg", youtubeId: "_3Xs81kWFGQ" },
  { id: "to-be-free-indeed-part-2", title: "To Be Free Indeed", part: "Part 2", speaker: "Dr. Andre Wilmans", date: "", shortDate: "", series: "i-have-decided", seriesName: "I Have Decided", campus: "CFC Johannesburg", youtubeId: "fpj71u2P78w" },
  { id: "i-have-decided-part-1", title: "I Have Decided", part: "Part 1", speaker: "Ps. Greg Thomaz", date: "", shortDate: "", series: "i-have-decided", seriesName: "I Have Decided", campus: "CFC Johannesburg", youtubeId: "zffD7B-7DjY" },
  { id: "god-s-perfect-plan-for-marriage-part-5", title: "God's Perfect Plan for Marriage", part: "Part 5", speaker: "Ps. Jenny Roche", date: "", shortDate: "", series: "marriage-life-money-hope", seriesName: "Marriage Series: Life · Money · Hope", campus: "CFC Johannesburg", youtubeId: "SM2Or8olva4" },
  { id: "the-way-out-of-the-mess-part-4", title: "The Way Out of the Mess", part: "Part 4", speaker: "Dr. Johnny Slabbert", date: "", shortDate: "", series: "marriage-life-money-hope", seriesName: "Marriage Series: Life · Money · Hope", campus: "CFC Johannesburg", youtubeId: "OKqDdl3Gy18" },
  { id: "small-shifts-lasting-relationships-part-3", title: "Small Shifts, Lasting Relationships", part: "Part 3", speaker: "Ps. Clive Nyakudzi", date: "", shortDate: "", series: "marriage-life-money-hope", seriesName: "Marriage Series: Life · Money · Hope", campus: "CFC Johannesburg", youtubeId: "-oN6y1NZPL8" },
  { id: "beyond-the-numbers-part-2", title: "Beyond the Numbers", part: "Part 2", speaker: "Teacher Paul J.v.v", date: "", shortDate: "", series: "marriage-life-money-hope", seriesName: "Marriage Series: Life · Money · Hope", campus: "CFC Johannesburg", youtubeId: "yTc5DGukMH0" },
  { id: "hope-part-1", title: "Hope", part: "Part 1", speaker: "Ps. Greg Thomaz", date: "", shortDate: "", series: "marriage-life-money-hope", seriesName: "Marriage Series: Life · Money · Hope", campus: "CFC Johannesburg", youtubeId: "cysRelWG_MY" },
  { id: "all-about-jesus-part-4", title: "All About Jesus", part: "Part 4", speaker: "Ps. Jenny Roche", date: "", shortDate: "", series: "what-the-bible-is-all-about", seriesName: "What the Bible Is All About", campus: "CFC Johannesburg", youtubeId: "VeoGk9umKLI" },
  { id: "the-book-of-acts-part-3", title: "The Book of Acts", part: "Part 3", speaker: "Ps. Greg Thomaz", date: "", shortDate: "", series: "what-the-bible-is-all-about", seriesName: "What the Bible Is All About", campus: "CFC Johannesburg", youtubeId: "4nWl6aWN5Fw" },
  { id: "the-gospels-part-2", title: "The Gospels", part: "Part 2", speaker: "Dr. Johnny Slabbert", date: "", shortDate: "", series: "what-the-bible-is-all-about", seriesName: "What the Bible Is All About", campus: "CFC Johannesburg", youtubeId: "Z0L2jQZw7J0" },
  { id: "the-old-testament-part-1", title: "The Old Testament", part: "Part 1", speaker: "Dr. Andre Wilmans", date: "", shortDate: "", series: "what-the-bible-is-all-about", seriesName: "What the Bible Is All About", campus: "CFC Johannesburg", youtubeId: "oS-pE6_psrs" },
  { id: "how-to-share-your-faith-part-3", title: "How to Share your Faith", part: "Part 3", speaker: "Ps. Jenny", date: "", shortDate: "", series: "world-outside-your-window", seriesName: "World Outside Your Window", campus: "CFC Johannesburg", youtubeId: "QsHBgxRF-EU" },
  { id: "better-and-brighter-part-2", title: "Better and Brighter", part: "Part 2", speaker: "Teacher Paul", date: "", shortDate: "", series: "world-outside-your-window", seriesName: "World Outside Your Window", campus: "CFC Johannesburg", youtubeId: "uCmkTYvQKr8" },
  { id: "world-outside-your-window-part-1", title: "World Outside Your Window", part: "Part 1", speaker: "Ps. Greg Thomaz", date: "", shortDate: "", series: "world-outside-your-window", seriesName: "World Outside Your Window", campus: "CFC Johannesburg", youtubeId: "SeT5xS1KDA0" },
  { id: "miracles-of-restoration-part-2", title: "Miracles of Restoration", part: "Part 2", speaker: "Ps. Greg Thomaz", date: "", shortDate: "", series: "miracles-of-jesus", seriesName: "Miracles of Jesus", campus: "CFC Johannesburg", youtubeId: "M1r3nFxpugY" },
  { id: "believing-in-the-impossible-part-1", title: "Believing in the Impossible", part: "Part 1", speaker: "Dr. Andre Wilmans", date: "", shortDate: "", series: "miracles-of-jesus", seriesName: "Miracles of Jesus", campus: "CFC Johannesburg", youtubeId: "Qp9XtCLbbbg" },
  { id: "2025-the-time-of-joseph-s-blessing-part-2", title: "2025 — The Time of Joseph's Blessing", part: "Part 2", speaker: "Apostle Theo Wolmarans", date: "", shortDate: "", series: "the-time-of-josephs-blessing", seriesName: "2025 — The Time of Joseph's Blessing", campus: "CFC Johannesburg", youtubeId: "dLZwtzU3Yhg" },
  { id: "2025-the-time-of-joseph-s-blessing-part-1", title: "2025 — The Time of Joseph's Blessing", part: "Part 1", speaker: "Apostle Theo Wolmarans", date: "", shortDate: "", series: "the-time-of-josephs-blessing", seriesName: "2025 — The Time of Joseph's Blessing", campus: "CFC Johannesburg", youtubeId: "Rmf8_w_uH8U" },
];

export function getMessage(id: string): Message | undefined {
  return messages.find((m) => m.id === id);
}

export function getSeries(slug: string): Series | undefined {
  return series.find((s) => s.slug === slug);
}

/** Messages belonging to a series, in catalogue (newest-first) order. */
export function messagesInSeries(slug: string): Message[] {
  return messages.filter((m) => m.series === slug);
}

/** Display name for a series slug, falling back to the slug itself. */
export function seriesLabel(slug: string): string {
  return getSeries(slug)?.name ?? slug;
}

/** Canonical YouTube still for a video id (loaded by the browser at runtime). */
export function youtubeThumb(id: string): string {
  // hqdefault always exists; covered into a 16:9 frame it crops cleanly.
  return `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
}

/** The image to show for a message: the real YouTube still for its video. */
export function messageImage(m: Message): string {
  return youtubeThumb(m.youtubeId);
}

/** Cover image for a series: the YouTube still of its first video. */
export function seriesCover(s: Series): string {
  return youtubeThumb(s.coverVideoId);
}
