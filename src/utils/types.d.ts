export interface redditListing {
	kind: "Listing";
	data: {
		dist?: any;
		after?: any;
		before?: any;
		modhash: string;
		geo_filter: string;
		children: redditLink[] | redditComment[];
	};
}

export interface redditLink {
	kind: "t3";
	data: {
		approved_at_utc?: any;
		subreddit: string;
		selftext: string;
		user_reports: any[];
		saved: boolean;
		mod_reason_title?: any;
		gilded: number;
		clicked: boolean;
		title: string;
		link_flair_richtext: any[];
		subreddit_name_prefixed: string;
		hidden: boolean;
		pwls: number;
		link_flair_css_class: string;
		downs: number;
		thumbnail_height?: any;
		top_awarded_type?: any;
		parent_whitelist_status: string;
		hide_score: boolean;
		name: string;
		quarantine: boolean;
		link_flair_text_color: string;
		upvote_ratio: number;
		author_flair_background_color?: any;
		subreddit_type: string;
		ups: number;
		total_awards_received: number;
		media_embed: MediaEmbed;
		thumbnail_width?: any;
		author_flair_template_id?: any;
		is_original_content: boolean;
		author_fullname: string;
		secure_media?: any;
		is_reddit_media_domain: boolean;
		is_meta: boolean;
		category?: any;
		secure_media_embed: SecureMediaEmbed;
		link_flair_text: string;
		can_mod_post: boolean;
		score: number;
		approved_by?: any;
		is_created_from_ads_ui: boolean;
		author_premium: boolean;
		thumbnail: string;
		edited: boolean;
		author_flair_css_class?: any;
		author_flair_richtext: any[];
		gildings: Gildings;
		content_categories?: any;
		is_self: boolean;
		mod_note?: any;
		created: number;
		link_flair_type: string;
		wls: number;
		removed_by_category?: any;
		banned_by?: any;
		author_flair_type: string;
		domain: string;
		allow_live_comments: boolean;
		selftext_html: string;
		likes?: any;
		suggested_sort?: any;
		banned_at_utc?: any;
		view_count?: any;
		archived: boolean;
		no_follow: boolean;
		is_crosspostable: boolean;
		pinned: boolean;
		over_18: boolean;
		all_awardings: any[];
		awarders: any[];
		media_only: boolean;
		link_flair_template_id: string;
		can_gild: boolean;
		spoiler: boolean;
		locked: boolean;
		author_flair_text?: any;
		treatment_tags: any[];
		visited: boolean;
		removed_by?: any;
		num_reports?: any;
		distinguished?: any;
		subreddit_id: string;
		author_is_blocked: boolean;
		mod_reason_by?: any;
		removal_reason?: any;
		link_flair_background_color: string;
		id: string;
		is_robot_indexable: boolean;
		num_duplicates: number;
		report_reasons?: any;
		author: string;
		discussion_type?: any;
		num_comments: number;
		send_replies: boolean;
		media?: any;
		contest_mode: boolean;
		author_patreon_flair: boolean;
		author_flair_text_color?: any;
		permalink: string;
		whitelist_status: string;
		stickied: boolean;
		url: string;
		subreddit_subscribers: number;
		created_utc: number;
		num_crossposts: number;
		mod_reports: any[];
		is_video: boolean;
	};
}

export interface redditComment {
	kind: "t1";
	data: {
		subreddit_id: string;
		approved_at_utc?: any;
		author_is_blocked: boolean;
		comment_type?: any;
		awarders: any[];
		mod_reason_by?: any;
		banned_by?: any;
		author_flair_type: string;
		total_awards_received: number;
		subreddit: string;
		author_flair_template_id?: any;
		likes?: any;
		replies: redditListing;
		user_reports: any[];
		saved: boolean;
		id: string;
		banned_at_utc?: any;
		mod_reason_title?: any;
		gilded: number;
		archived: boolean;
		collapsed_reason_code?: any;
		no_follow: boolean;
		author: string;
		can_mod_post: boolean;
		send_replies: boolean;
		parent_id: string;
		score: number;
		author_fullname: string;
		removal_reason?: any;
		approved_by?: any;
		mod_note?: any;
		all_awardings: any[];
		collapsed: boolean;
		body: string;
		edited: boolean;
		top_awarded_type?: any;
		author_flair_css_class?: any;
		name: string;
		is_submitter: boolean;
		downs: number;
		author_flair_richtext: any[];
		author_patreon_flair: boolean;
		body_html: string;
		gildings: Gildings;
		collapsed_reason?: any;
		distinguished?: any;
		associated_award?: any;
		stickied: boolean;
		author_premium: boolean;
		can_gild: boolean;
		link_id: string;
		unrepliable_reason?: any;
		author_flair_text_color?: any;
		score_hidden: boolean;
		permalink: string;
		subreddit_type: string;
		locked: boolean;
		report_reasons?: any;
		created: number;
		author_flair_text?: any;
		treatment_tags: any[];
		created_utc: number;
		subreddit_name_prefixed: string;
		controversiality: number;
		depth: number;
		author_flair_background_color?: any;
		collapsed_because_crowd_control?: any;
		mod_reports: any[];
		num_reports?: any;
		ups: number;
	};
}
