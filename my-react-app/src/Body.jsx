import { useState } from "react";
import "./Body.css"
function Body(){  

    const[theme,settheme]=useState(true)
    function changetheme(){
        setTimeout(()=>settheme(!theme),200)
        setTimeout(()=>{theme?setcol("white"):setcol("black")},200)
        setTimeout(()=>{theme?setcolour("black"):setcolour("white")},200)
        setTimeout(()=>{theme?setnum("50px"):setnum("0px")},200)

    }
    const [col,setcol]=useState("black")
    const [colour,setcolour]=useState("white")
    const [num,setnum]=useState('0px')
    return(
        <>
        <div className="body" style={{backgroundColor:colour,color:col,transition:'1000ms,ease out'}}>
            <div id="p">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit a saepe delectus, tempore eveniet rerum facere mollitia ratione unde enim, molestias eos eaque accusamus, officia maxime id exercitationem ab! Consequuntur!
            Eius atque aliquid id at. Ad inventore sunt perspiciatis, exercitationem modi adipisci atque quaerat. Molestias possimus quaerat similique earum. Delectus aliquid explicabo velit voluptatibus, doloremque ea? Reprehenderit aperiam aliquam ipsum?
            Magnam amet quis nostrum, blanditiis ab ratione nihil cum a distinctio! Neque natus repudiandae deleniti similique illo vero, dolor accusantium laborum dolores debitis in assumenda fuga fugiat voluptas ipsum odit.
            Modi alias quisquam facilis beatae quo dolorem magnam ipsa! Voluptate amet dolores eius modi fugiat illum repudiandae nam laudantium nemo consequatur ullam, sed eveniet quis quod, aliquam maiores natus neque.
            Accusantium reprehenderit numquam, placeat veritatis veniam incidunt odit suscipit possimus? Aperiam quasi incidunt autem deserunt voluptate iste! Ex aperiam maiores possimus cum earum pariatur debitis repudiandae ea, totam nisi deleniti?
            Sed nemo, sequi at quod maiores, ex error cumque velit maxime praesentium saepe facere eius! Molestiae libero soluta natus possimus, harum officiis inventore excepturi dolorem deleniti reiciendis labore nemo minus?
            Maiores iste ducimus rerum quasi. Architecto doloremque suscipit nobis consequatur, ex animi unde necessitatibus alias quo dolorum, praesentium aliquam, fugit fugiat reprehenderit iure ab? Error excepturi quibusdam quos ratione tenetur?
            Deilique et, vel ducimus dicta c
            Esse veniam rerum repellendus, doloribus nostrum minima atque, reprehenderit molestias fuga accusantium sint ratione porro impedit! Itaque eligendi laborum provident, illo voluptatibus hic omnis excepturi doloremque, quas nostrum tempora ipsam?
            Cumque consectetur nam autem laborum! Blanditiis ipsa quibusdam facere, beatae ab sint sapiente magnam vero eos totam numquam expedita aut quaerat consectetur ducimus quidem voluptate, tenetur sunt ad. Animi, similique!
            Et amet deserunt vero! Labore earum nobis aspernatur voluptatum explicabo est non unde? Reiciendis placeat, distinctio vero sed expedita ut voluptatum, blanditiis, totam accusamus quam quia magni. Ad, velit debitis.
            Ad, culpa ea magnam reprehenderit odit inventore odio sed voluptatibus in ab. Veniam, illum? Est, natus quam. Quia in quidem suscipit, vel illo aut esse numquam facere, sed praesentium modi.
            Est illo corrupti eligendi blanditiis debitis suscipit repellat minus quae nesciunt accusamus accusantium ullam perferendis officiis officia architecto quos eos consectetur, non maiores aut explicabo similique. Sint nemo voluptatem corporis?
            Nemo aperiam sapiente dolore pariatur! Asperiores dicta eveniet natus ex deserunt? Voluptatibus blanditiis consequuntur dolore possimus eius quo itaque odit vel facere numquam quod officiis architecto, voluptas ipsum, ad nulla.
            Nulla ratione obcaecati exercitationem? Reprehenderit modi nam, commodi sint consectetur eaque laborum iusto nemo sapiente beatae magnam minus inventore laudantium laboriosam voluptates, quibusdam, dolore consequatur eos repudiandae quaerat voluptatibus itaque.
            Voluptatem saepe dolorem dicta quod rerum, repudiandae iure odio aliquid eius at! Sunt reiciendis vitae eaque facere possimus aliquid ab et soluta ullam, harum placeat nemo laborum laudantium molestiae quaerat.
            Magnam nesciunt sunt ut, quidem molestiae est itaque! Tempora modi earum possimus debitis deserunt, qui explicabo quisquam velit mollitia nesciunt odit consequatur, placeat saepe blanditiis sed libero officiis ducimus consequuntur?
            Reiciendis odio nihil vero minima, modi ut! Rerum, expedita esse nostrum sunt aliquam facilis, officia quasi maxime, quo odio accusantium! Eum quia tempora provident. Ipsa consectetur expedita similique vel illum?
            Temporibus ea sequi quisquam debitis ab, commodi alias magnam odio sunt aliquam soluta suscipit. Deleniti neque sunt veniam natus. Iure suscipit ad rerum, eos odio laboriosam excepturi accusamus quisquam autem.
            Quasi possimus dolor vel delectus commodi velit architecto, maxime quisquam mollitia maiores repudiandae iste quis autem reprehenderit, doloribus odio deleniti vitae cum iusto facilis excepturi quod beatae necessessitatibus laborum blanditiis culpa. Illum.
            Quas sequi explicabo molestiae possimus ratione nulla sapiente dolorem maxime quod, et tempora iusto illum, suscipit similique expedita ea exercitationem laudantium repellat quos deserunt debitis enim provident reprehenderit! Nobis, quas?
            Blanditiis in nemo ab maxime accusamus reprehenderit odio? Qui sit cum consequatur laboriosam molestiae nam labore, aliquam sunt error dicta consectetur necessitatibus deserunt, dignissimos porro esse in! Error, illo dolorem.
            Aliquam nesciunt tempora praesentium sunt distinctio laborum dolorum dicta veniam suscipit officia quidem optio earum error ipsum, harum maiores dolores debitis eaque ut autem. Minus nobis doloremque dignissimos consequatur debitis.
            Accusamus recusandae ipsam delectus officia obcaecati modi inventore quo nulla in, nihil odit tempora autem impedit saepe perspiciatis quos eligendi dignissimos ea unde corporis, reprehenderit itaque distinctio amet dolores. Soluta?
            Magni obcaecati repudiandae provident quam animi, tempore, recusandae sed doloremque quo deleniti alias totam enim mollitia tenetur laudantium, exercitationem o explicabo, placeat sint consequuntur, quos possimus! Repudiandae, dolores!
            Veritatis iusto unde alias, sequi quisquam modi velit nobis, deleniti excepturi laborum error voluptatibus suscipit, assumenda fugiat? Consectetur, quas eaque hic amet distinctio modi reprehenderit, saepe rerum culpa, a iste!
            Iusto maxime odit fugiat facilis consequuntur dolorum eos expedita quidem saepe suscipit distinctio porro assumenda voluptatem perferendis aspernatur facere dicta tempora, sit reprehenderit voluptas ducimus qui iste natus dignissimos. Facere!
            Rem quam possimus error sit, expedita dolor et eos cumque est incidunt consequatur dicta nemo impedit ex amet. Reprehenderit porro consectetur deleniti dolores provident ad fuga, praesentium beatae iste sapiente.
            Quae architecto sapiente blanditiis reprehenderit nostrum iste repellendus assumenda maxime veritatis animi ducimus ab in, et omnis alias dignissimos  amet. Iusto saepe libero consequuntur omnis, accusantium asperiores.
            Amet vero molestias quod adipisci optio deleniti sit labore quae nulla commodi molestiae simullam suscipit temporibus animi iure et aut voluptas aliquam numquam ex doloreendus architecto officiis ea, fugit doloremque veniam. Ab.
            Laborum non hic iusto blanditiis optio suscipit eveniet atque. Porro ipsa neque sit! Possimus omnis maxime, repellat doloremque, repellendus nisi impedit consectetume! Provident ipsam ullam natus sit eum delectus quisquam harum?
            Velit laborum esse incidunt dolore nisi harum explicabo voluptate quo laboriosam eveniet, quibusdam rerum excepturi similique soluta non error eligendi optio ane offim atque, adipisci ex sit cupiditate eligendi est aperiam, quibusdam laborum.
            Unde nemo eius architecto minima aliquam vel ipsa pariatur, repellat, minus enim possimus quam consectetur incidunt labore voluptate in fuga provident ex, illo earum porro laborum? Voluptatibus eaque natus magnam.
            Nesciunt voluptatum, iusto temporibus at numquam facere necessitatibus molestiae pariatur architecto ullam aliquid distinctio! Similique non quis porro sed eaque ex, ad mollitia doloribicia fugiat autem voluptas voluptatem nobis nihil eligendi consequuntur quam.
            Cum deserunt quo alias ut ea corrupti placeat est. Facere nulla velit soluta, alias quasi non. Similique dicta quae, labore cum amet reprehenderit corporis, deleniti aspernatur fugiat, velit sapiente nam?
            Perspiciatis repellat illo, voluptate, illum eveniet architecto tempora ipsum itaque eius quidem natus animi labore voluptatibus optio. Illum quae enim soluta voluptas tenetur libero magni asperiores ipsum porro? Quis, labore.
    Nesciunt itaque tempora deserunt amet nihil aliquid expedita cupiditate voluptatibus asperiores distinctio. Fugit, ipsum pariatur doloremque unde nihil, exercitationem incidunt veritatis a corporis officiis, neque aliquam velit quaerat temporibus quasi?
            Porro ipsam perferendis ratione saepe vitae eum sapiente illum distinctio fuga, incidunt qui! Magni commodi consequuntur expedita corrupti. Quam dolor culpa nulla eum voluptas error nobis officiis consequuntur explicabo quo.
            Atque repellendus accusantium cupiditate perspiciatis ut consectetur magni dicta eligendi odit numquam eveniet soluta explicabo iste quia dolorum, reiciendis quas quae imi repells eaque voluptatibus veritatis asperiores doloremque quo sapiente odio libero.aut. Eveniet.
            Tempora enim eligendi dolore nemo modi quos ex, a officia rem possimus quidem temporibus ipsum iste amet minus quisquam dignissimos consequuntur veritatem laboriosam? Quis repudiandae ipsum atque?
            Nisi dolore necessitatibus tempore harum tempora! Fuga sequi quos quo sapiente mollitia sit reprehenderit perspiciatis nesciunt quisquam? Nesciunt itaque error is pariatur, alias accusantium nec reprehenderit vel ad alias repellendus vitae nostrum.
            Est, aperiam, culpa ducimus ipsum officiis exercitationem consequatur sed consectetur quos nulla ipsa dolorem quidem fuga ab. Possimus ipsa enus architecto dolores culpa eligendi eveniet debitis.
            Dolore ipsam aut enim possimus deserunt officiis, sed architecto non quasi repellat nisi illo aspernatur provident perferendis quaerat suscipit qui voluptatibus quis repellendus. Sequi, suscipit. Distinctio consectetur numquam assumenda dignissimos!
            Repudiandae architecto porro inventore neque dolorum omnis odio, libero cupiditate nesciunt, veritatis ipsam. Dolor reiciendis soluta, repellat consequuntur facilis dicta? A quam possimus alias, maxime ullam quas ad aliquid dignissimos?
            Odio, nisi! Debitis similique atque non tempore placeat, molestiae optio reiciendis officia deleniti ex dolores. Quod deleniti nihil, quaerat recusandae dolorum consectetur ducimus reprehenderit quisquam ullam neque eaque laborum repudiandae.
            Quis, distinctio eum eaque, magni obcaecati, aspernatur perspiciatis fugiat repellat error sequi aliquam dolor esse qui cum iste sed asperiores mollitia nostrum ex alias omnis! At eius reiciendis inventore numquam.
            Ipsum ut sapiente dolor ipsam error accusantium. Ut, deserunt? Nisi placeat, eveniet non sed impedit dolore eligendi velit minus provident ullam quptio quod consequatur perferendis officiis. Iusto cum repellendus molestiae aliquid sapiente.
            Aliquam, tempora. Ab nam sapiente alias numquam recusandae. Exercitationem officiis error deleniti explicabo, est iusto laboriosam deserunt dicta quia itaquaut quis tenetur. Pariatur odit omnis odio consequuntur explicabo?
            Animi expedita minus eius adipisci tenetur, sit et illum doloribus natus unde ipsum? Quis doloribus, debitis odit sapiente vitae molestias! Fugit autem ea pariatur? Quia, nihil laboriosam. Sapiente, est dolorem.
            Eum nobis quo repellendus non asperiores, sit beatae rerum eligendi porro voluptates praesentium error vero necessitatibus ratione deleniti, accusantium inventore. Dolore perferendis accusamus velit aliquid, corporis eum sed aliquam labore.
            Itaque earum eveniet voluptas architecto vel placeat sapiente neque alias tempora. Vero mollitia est ut autem earum, quis obcaecati placeat iste consectetur odio, cupiditate laborum. Reprehenderit impedit qui asperiores suscipit.
            Delectus magnam explicabo facilis! Explicabo vel fugit vitae quis, adipisci eligendi sint nobis dolore hic ipsa sunt libero ipsum iusto mollitia odio nihil ex officiis facilis minima a maiores odit.
            Quas nam fugiat saepe dignissimos eaque ea autem, quisquam nemo, non optio doloribus ab vitae, quibusdam odio mollitia eos enim? Reiciendis unde itaque expedita deserunt sapiente laborum. Sed, eaque tempore.
            Architecto quibusdam error deserunt, aut reiciendis facilis dolores molestiae nam totam et, dolor ipsam aliquam necessitatibus laborum porro sequi! Eaque ad omnis nisi. Mollitia eligendi quo aperiam aut voluptatem deserunt!
            Saepe, molestias quisquam? Voluptates praesentium fugit quidem libero. Soluta delectus voluptatum necessitatibus, laborum quae perferendis velit nemo molestiae nulla? Dicta nulla libero tempora nisi similique repudiandae a veniam molestiae dolorem.
            Cum ab eveniet, natus dolorem ratione exercitationem adipisci temporibus ipsam non iure enim culpa, harum reprehenderit maxime ea architecto nobis eaque animi nisi atque repellendus! Commodi maiores dolor veritatis dignissimos!
            Temporibus eaque accusantium enim maiores, nostrum officiis vel laborum consequuntur dolorem doloremque voluptatibus voluptate totam tempora. Voluptates, eligendi itaque velit quasi praesentium illum fugit, molestias mollitia, cumque quidem eos animi.
            A fugiat ab, ullam, omnis necessitatibus expedita officiis eligendi eius laborum qui quo accusamus? Necessitatibus fugiat distinctio dolor, laudantium delectus accusantium nobis reprehenderit saepe alias sit neque possimus vero sequi!
            Modi, sunt voluptas nostrum tenetur doloremque minima rem, architecto nisi a at magni eius non adipisci unde. Saepe consequuntur fugit blanditiis repudiandae delectus recusandae, debitis esse impedit quia molestiae corrupti?
            Porro ipsam voluptatum perferendis distinctio earum laborum iure perspiciatis, quaerat nemo enim, quisquam magni. Quas consectetur in repudiandae reiciendis magnam. Voluptatibus dicta assumenda quibusdam provident necessitatibus tenetur doloribus culpa nostrum!
            Dolor, quae in magni repellendus fuga facilis consectetur sunt, libero laboriosam velit quasi quam dolorum dolore, alias voluptas totam earum recusandae. Maxime illumitatibus orrupti maxime, eveniet aliquid corporis earum laudantium architecto dolores pariatur! Neque, fugit!
            Labore consequatur dignissimos quidem sapiente cum pariatur nesciunt ab eveniet quod quia accusantium doloremque, obcaecati amet deleniti, vitae cupiditate fugit ratione. Earum, rerum sapiente excepturi beatae qui saepe accusamus officiis.
            Incidunt dolor autem tempore in non perferendis fugiat bitis beatae voluptas ad. Amet commodi blanditiis eum corporis asperiores exercitationem fuga nisi voluptatem veritatis doloribus repudiandae sapiente quisquam, hic eius dolorem voluptatum ut ab magni molestias! Quae, rem repellendus!
            Assumenda, tenetur veritatis? Nesciunt nostrum ratione beatae blanditiis numquam quasi inventore rem incidunt necessitatibus nisi aut maiores illo sed vel, nam quo adipisci! Labore laudantium aperiam quos voluptatum. Fuga, at?
            Omnis deleniti rem neque exercitationem saepe, dignissimos libero ea animi, nisi distinctio et sapiente aliquam beatae unde earum eum corporis, tenetur consequatur pariatur possimus rerum? Vitae quibusdam eaque esse similique!
            Nam ab aliquam, excepturi nihil incidunt iure quas voluptatibus dignissimos fugiat soluta fugit quam nostrum tenetur aspernatur, ducimus dolore est quaerat earumendis pariatur totam?
            Quisquam eum ducimus veniam hic nihil non voluptatum explicabo velit dolorem, expedita veritatis sed neque nam cumque tempore? Eos est quidem harum officiis incidunt deleniti minus placeat minima consectetur. Debitis?
            Laborum, aut velit harum, quas, maiores et provident nisi tempora ex unde maxime. Labore illum consectetur quod inventore, at cupiditate, animi molestias in unde sint, omnis alias repudiandae aut ad!
            Magnam, molestiae! Qui dolorem libero laudantium dicta minima? Aspernatur, nobis saepe ad illo itaque accusamus repudiandae dolores rem cum reprehenderit ut alias omnis possimus ipsam consectetur pariatur recusandae vel. Ducimus?
            Ratione corrupti dolorum quidem dicta sequi soluta voluptatem excepturi tempore, exercitationem voluptates fugiat et alias libero saepe ea quaerat dolore maxime quiamr architecto est officia aperiam, molestiae iste minima iusto!
            Debitis architecto minus, pariatur facere sapiente porro incidunt blanditiis corrupti voluptas accusantium, atque, nobis velit nisi labore placeat unde! Numquam possimus, sequi dignissimos cupiditate. Fugit dolorem quae provident nam optio! Velit!
            Nam libero illo, minus provident incidunt, quis fugit, consectetur in magnam ducimus non sit accusantium alias facere error tenetur quos corporis perspiciatis unde ad quidcumque at non pariatur praesentium dicta eum hic, earum beatae.
            Fuga vel laborum repellat, quam distinctio perferendis nihil quia labore corporis autem nulla quas repellendus hic sunt id quis impedit deserunt! Nihil, quam quibusdam error velit corporis exercitationem aspernatur sapiente?
            Pariatur qui dolor commodi quas vel sapiente veritatis minima recusandae mollitia impedit blanditiis repellendus quaerat, doloribus aperiam eos unde. Adipisci, maxi molestias veniam harum a, praesentium, reicised. Nihil magnam eaque voluptatem praesentium voluptate aspernatur laudantium harum soluta.
            Eum quae illo minima sequi vel cumque voluptatibus est aspernatur quam reprehenderit explicabo id voluptatum porro temporibus quo nsumenda ipsam debitis.
            Vel tempora obcaecati quis aliquam ipsam exercitationem alias odit ipsum perferendis reprehenderit ab ducimus commodi quidem laboriosam distinctio laborum accusantium, cum tenetur illum? Tempore, molestiae. Harum quibusdam sunt explicabo cum!
ihil in, impedit ut magnam. Tempore reprehenderit fugit, odio as            Cum nulla, voluptate perferendis magnam sint expedita ut voluptas laborum! Cumque necessitatibus aperiam, dolores modi aliquam veniam id, expedita officiis iure reprehenderit quidem quasi quo eveniet libero nam voluptas eius?
            Corrupti, earum sequi in veritatis perferendis, sapiente quis, voluptatum illo provident beatae odio aut dolorum molestiae? Distinctio ipsa quia enim ex debitis quos labore pariatur iure itaque consequatur? Laborum, optio!
            Quidem vero et doloribus explicabo iste laborum reprehenderit reiciendis. At blanditiis voluptas earum repellat, autem officia! Consequuntur neque non quis ab, repellat reprehenderit magni distinctio, accusamus quae, nobis nesciunt velit.
            Praesentium quia totam laboriosam quam quae vero in sequi velit explicabo, quis dolorem ratione eligendi id veritatis temporibus est deserunt quaerat aliquam? Omnis asperiores inventore aliquam sunt autem pariatur esse.
            Sed, commodi? Obcaecati in laboriosam alias omnis id molestiae? Culpa dolorem et reiciendis. Numquam ut minus odio dolor voluptatibus ea rem assumenda exercitationem consequuntur, minima quia soluta ex nemo qui!
            Eveniet molestiae, labore architecto fugiat at doloribus quibusdam corporis praesentium autem. Molestias corrupti vel pariatur vitae! Et rerum neque dolore impedit quia soluta accusantium ducimus non perferendis illum? Dolor, cumque?
            Iusto doloremque impedit quod omnis nulla commodi delectus esse totam sapiente at similique, suscipit labore fugit nemo consequuntur beatae, quam ea, quibusdam architecto. Illo iste quibusdam quo, eveniet nesciunt cum.
            Beatae commodi distinctio similique. Voluptas sunt voluptates tenetur, aut ipsam consectetur iusto repellat accusantium? Explicabo adipisci unde sequi! Amet blanditiis est esse exercitationem officiis voluptatibus similique ullam temporibus non vero.
            Quod ipsum nisi sequi iusto libero a saepe itaque autem amet ex modi enim, tenetur non doloribus eligendi consectetur? Molestias aspernatur pariatur odio et modi odit nesciunt eaque sed rem.
           lias vero iure! Aperiam saepe aliquid debitis ea, sint et ipsum beatae velit optio obcaecati, culpa laboriosam enim labore cumque non!
            </div>
x
            
            <div class="change" onClick={changetheme} style={{backgroundColor:col,color:colour,transition:'1000ms,ease out'}}/>
            

            <div value="circle" class="circle" onClick={changetheme} style={{translate:num,backgroundColor:colour,color:col,transition:'1000ms,ease out'}}/>
        </div>
        
        <div id="pages">
            <div className="page" style={{backgroundColor:col,color:colour,transition:'1000ms,ease out'}}>1</div>
            <div className="page" style={{backgroundColor:col,color:colour,transition:'1000ms,ease out'}}>2</div>
            <div className="page" style={{backgroundColor:col,color:colour,transition:'1000ms,ease out'}}>3</div>
            <div id="dots" style={{backgroundColor:col,color:colour,transition:'1000ms,ease out'}}><b>. . .</b></div>
            <div className="page" style={{backgroundColor:col,color:colour,transition:'1000ms,ease out'}}>100</div>
            </div>
        </>
    )
}
export default Body
