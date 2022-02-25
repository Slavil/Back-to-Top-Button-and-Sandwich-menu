import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Posts");
  }

  async getHtml() {
    return `
            <h1>Posts</h1>
            
            <h3>The Newspaper!</h3>
            <p>In England the printed news book or news pamphlet usually related a single topical event such as a battle, disaster, or public celebration. The earliest known example is an eyewitness account of the English victory over the Scots at the Battle of Flodden (1513). Other forerunners include the town crier and ballads and broadsides.

            In the first two decades of the 17th century, more or less regular papers printed from movable type appeared in Germany, Italy, and the Netherlands. The Dutch “corantos” (“currents of news”), which strung together items extracted from foreign journals, became the sources for English and French translations published in Amsterdam as early as 1620. Rudimentary newspapers appeared in many European countries in the 17th century, and broadsheets with social news were published in Japan in the Tokugawa period (1603–1867).
            
            The first English corantos appeared in London in 1621. By the 1640s the news book had taken the form of a newspaper—the title page being dropped. The first English daily was The Daily Courant (1702–35). Not until 1771 did Parliament formally concede journalists the right to report its proceedings. The Times, which became a model for high quality and later led in mechanical innovation, was founded by John Walter in 1785, and The Observer was founded in 1791.
            
            The Thirty Years’ War (1618–48) set back incipient newspapers in Germany, and censorship in various forms was general throughout Europe. Sweden passed the first law guaranteeing freedom of the press in 1766.
            
            In France the first daily, Journal de Paris, was started in 1771, and the Journal des Débats (1789), published until World War II, was founded as a daily to report on sessions of the National Assembly. Papers multiplied during the Revolution and decreased sharply after it.
            
            The first newspaper in the United States, Publick Occurrences Both Forreign and Domestick (Boston, September 1690), was suppressed by the colonial governor after one issue. In 1704 the Boston News-letter began publication as a weekly issued by the postmaster. The Boston Gazette (1719) was printed by James Franklin, Benjamin Franklin’s brother. Independent newspaper publishing in the English colonies is considered to have begun with James Franklin’s New-England Courant (1721). Freedom of the press was advanced in a landmark case in 1735 when John Peter Zenger, a New York City newspaper publisher, was acquitted of libel on the defense that his political criticism was based on fact. Press freedom in the United States was further secured by the First Amendment to the U.S. Constitution (1791). Most of the press of the new republic proved fiercely partisan in the political struggles between the Federalists and Jeffersonian Republicans.
            
            Circulation in the low thousands was common for papers at the beginning of the 19th century. Rising circulations were made possible by increased literacy and by technological advances in mechanical typesetting, in high-speed printing (rotary press), in communications (telegraph and telephone), and in transport (railway). Led by papers in Great Britain and the United States, newspapers broadened their appeal and reduced prices. The Times, for example, increased circulation from 5,000 in 1815 (price seven pence) to 50,000 by the mid-19th century (five pence). In the United States, Benjamin Day established the Sun in New York City (1833) as the first successful penny paper. Two years later James Gordon Bennett began the New York Herald. He shaped many of the directions of modern journalism, including comprehensive coverage and an emphasis on entertainment. Horace Greeley, who crusaded for women’s rights and against slavery, founded the independent New York Tribune (1841). Another independent, though less flamboyant, paper, The New York Times, appeared 10 years later. By the mid-19th century, there were 400 dailies and 3,000 weekly papers in the United States.</p>

            <p>What became the Associated Press was organized (1848) by New York publishers as a cooperative news-gathering enterprise, and in London Paul J. Reuter began his foreign news service for the press (1858). Competition in New York City between Joseph Pulitzer, who owned the World from 1883, and William Randolph Hearst (Journal, 1895) led to excesses of lurid and sensationalized news, called yellow journalism, and reactions against it in the late 1890s. In western Europe many papers became primarily organs of political and literary opinion.

            In 1896 Alfred Harmsworth (Lord Northcliffe) launched the London Daily Mail as a national paper. Priced low to increase circulation, it was deliberately based on a plan for earning most of the revenues from advertising. He also introduced the first tabloid (Daily Mirror, 1903)—about half the size of a standard paper (15 × 23 inches [38 × 58 cm]). The first American tabloid was the New York Daily News (1919), started by Joseph Medill Patterson and devoted to sex and sensationalism. Early in the 20th century, the number of American papers reached a peak (more than 2,000 dailies and 14,000 weeklies). They declined in number thereafter, though total circulation rose. During the 1920s and ’30s competition for circulation continued, and the wide use of syndicated columnists and ready-to-use features, comic strips, crossword puzzles, and other amusements developed.
            
            A dozen large chains later came to control more than half of the American dailies. The first American chain was organized by Edward W. Scripps in the 1890s. A pattern of consolidation and merger was seen worldwide, especially in the second half of the 20th century.</p>
        `;
  }
}
