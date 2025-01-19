import { SleeperUser } from "../user";

export type SleeperLeague = {
  name: string;
  avatar: string;
  season: string;
  status: string;
  total_rosters: string;
  league_id: string;
  previous_league_id: string;
  metadata: {
    latest_league_winner_roster_id: string;
    trophy_loser: string;
    trophy_loser_background: string;
    trophy_loser_banner_text: string;
    trophy_winner: string;
    trophy_winner_background: string;
    trophy_winner_banner_text: string;
  };
  settings: {
    bench_lock: number;
    best_ball: number;
    capacity_override: number;
    commissioner_direct_invite: number;
    daily_waivers_days: number;
    daily_waivers_hour: number;
    daily_waivers: number;
    disable_adds: number;
    disable_trades: number;
    draft_rounds: number;
    faab_suggestions: number;
    league_average_match: number;
    leg: number;
    max_keepers: number;
    max_subs: number;
    num_teams: number;
    offseason_adds: number;
    pick_trading: number;
    playoff_round_type: number;
    playoff_seed_type: number;
    playoff_teams: number;
    playoff_type: number;
    playoff_week_start: number;
    reserve_allow_cov: number;
    reserve_allow_dnr: number;
    reserve_allow_doubtful: number;
    reserve_allow_na: number;
    reserve_allow_out: number;
    reserve_allow_sus: number;
    reserve_slots: number;
    start_week: number;
    sub_lock_if_starter_active: number;
    sub_start_time_eligibility: number;
    taxi_allow_vets: number;
    taxi_deadline: number;
    taxi_slots: number;
    taxi_years: number;
    trade_deadline: number;
    trade_review_days: number;
    type: number;
    veto_auto_poll: number;
    veto_show_votes: number;
    veto_votes_needed: number;
    waiver_bid_min: number;
    waiver_budget: number;
    waiver_clear_days: number;
    waiver_day_of_week: number;
    waiver_type: number;
  };
  scoring_settings: {
    blk_kick: number;
    bonus_rec_te: number;
    def_st_ff: number;
    def_st_fum_rec: number;
    def_st_td: number;
    def_td: number;
    ff: number;
    fgm_0_19: number;
    fgm_20_29: number;
    fgm_30_39: number;
    fgm_40_49: number;
    fgm_50p: number;
    fgmiss: number;
    fum_lost: number;
    fum_rec_td: number;
    fum_rec: number;
    fum: number;
    int: number;
    pass_2pt: number;
    pass_int: number;
    pass_td: number;
    pass_yd: number;
    pts_allow_0: number;
    pts_allow_1_6: number;
    pts_allow_14_20: number;
    pts_allow_21_27: number;
    pts_allow_28_34: number;
    pts_allow_35p: number;
    pts_allow_7_13: number;
    rec_0_4: number;
    rec_10_19: number;
    rec_20_29: number;
    rec_2pt: number;
    rec_30_39: number;
    rec_40p: number;
    rec_5_9: number;
    rec_td: number;
    rec_yd: number;
    rec: number;
    rush_2pt: number;
    rush_td: number;
    rush_yd: number;
    sack: number;
    safe: number;
    st_ff: number;
    st_fum_rec: number;
    st_td: number;
    xpm: number;
    xpmiss: number;
  };
  roster_positions: RosterPosition[];
};

export type SleeperLeagueRoster = {
  league_id: string;
  owner_id: string;
  players: string[];
  reserve: string[];
  roster_id: number;
  settings: {
    fpts_against_decimal: number;
    fpts_against: number;
    fpts_decimal: number;
    fpts: number;
    losses: number;
    ties: number;
    total_moves: number;
    waiver_budget_used: number;
    waiver_position: number;
    wins: number;
  };
  starters: string[];
};

export type SleeperLeagueUser = SleeperUser & {
  metadata: {
    team_name: string;
  };
  is_owner: boolean;
};

export type RosterPosition =
  | "QB"
  | "RB"
  | "WR"
  | "TE"
  | "FLEX"
  | "SUPER_FLEX"
  | "BN";
