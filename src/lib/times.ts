import moment from "moment";

moment.updateLocale("en", {
	relativeTime: {
		future: "trong %s",
		past: "%s trước",
		s: "vài giây",
		ss: "%d giây",
		m: "một phút",
		mm: "%d phút",
		h: "một giờ",
		hh: "%d giờ",
		d: "một ngày",
		dd: "%d ngày",
		M: "một tháng",
		MM: "%d tháng",
		y: "một năm",
		yy: "%d năm",
	},
});
