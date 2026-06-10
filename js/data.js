const SUSPECTS = {
  margaret: {
    id: 'margaret',
    name: 'Margaret Hargrove',
    role: 'Wife, 54',
    account: `"I was in bed by ten. Edmund and I had argued earlier in the evening — about money, about the usual things — but I took my medication and went to sleep. I didn't hear anything unusual until the morning. I loved my husband. Whatever you think you know about our marriage, it was ours. Not yours to judge."`
  },
  oliver: {
    id: 'oliver',
    name: 'Oliver Hargrove',
    role: 'Son, 27',
    account: `"Yes, we argued. We always argued. That doesn't mean anything. I was in my room by midnight, couldn't sleep, just lay there. I didn't go downstairs. I know how this looks with the debt thing, but my father was going to help me — we had reached an understanding that night. He told me so himself. That's the last thing he ever said to me."`
  },
  vivienne: {
    id: 'vivienne',
    name: 'Vivienne Hargrove',
    role: 'Daughter, 23',
    account: `"I stand by what I did. He was defrauding people and I reported it. If that makes me a suspect to you, fine. But I was on the phone with my editor until almost one in the morning — you can check the records. I went to bed after that. I didn't go near his study. I didn't need to. The story was already out."`
  },
  danny: {
    id: 'danny',
    name: 'Danny Hargrove',
    role: "Edmund's Brother, 41",
    account: `"I've been sleeping on that couch for two weeks. Edmund was helping me get back on my feet — that was the arrangement. Were we perfect? No. We had history. But we were past it, or we were trying to be. I got up around two to get some water, maybe walked around a bit. Couldn't sleep either. I didn't see anything. I didn't hear anything. I wish I had."`
  },
  rose: {
    id: 'rose',
    name: 'Rose Hargrove',
    role: "Edmund's Mother, 79",
    account: `"I am perfectly lucid today, so I will ask you to write down exactly what I say. I was in my room. I take several medications and they make me confused at night. I may have wandered. I do that sometimes. I am told I can become... difficult when I wander. I have no memory of the hours between midnight and four. That is the truth and it is all I can offer you."`
  },
  croft: {
    id: 'croft',
    name: 'Inspector Aldous Croft',
    role: 'Lead Detective (your supervisor)',
    account: `"I assigned myself this case because I know this family. Professionally. Edmund Hargrove has been a person of interest in two prior investigations, both closed without charges — through no fault of the evidence. I want this done properly. Follow the evidence wherever it leads. That's an order, not a suggestion."`
  }
};

// suspect: null = red herring (forces inconclusive if picked)
const ROOMS = {
  living_room: {
    id: 'living_room',
    name: 'Living Room',
    floor: 1,
    description: 'The main gathering space of the manor. Heavy drapes, a cold fireplace, the faint smell of whiskey.',
    clues: [
      {
        id: 'monogrammed_handkerchief',
        name: 'Monogrammed Handkerchief',
        suspect: 'margaret',
        description: 'A woman\'s handkerchief, embroidered "M.H.", tucked deliberately into the sofa cushion. Not dropped — pushed in. The fabric carries traces of something wiped away.',
        deduction: 'M.H. — Margaret Hargrove. She was in this room and she was concealing something. You don\'t tuck a handkerchief into a cushion by accident. She was here, she was close to whatever happened in this room, and she hid the evidence of it.'
      },
      {
        id: 'defaced_portrait',
        name: 'Defaced Family Portrait',
        suspect: null,
        description: 'A framed family photo hidden behind a larger painting. Edmund\'s face has been scratched out. The damage looks old — the photo itself is years out of date.',
        deduction: 'This could have been done by anyone in this house, and probably more than once. The photo is old. The scratching is old. This tells you something about how the family feels — it doesn\'t tell you who killed Edmund last night.'
      },
      {
        id: 'unsigned_letter',
        name: 'Unsigned Letter Draft',
        suspect: null,
        description: '"I cannot keep doing this to the family." Hurried handwriting, unfinished, retrieved from the bin. The penmanship is stressed — difficult to match to any one person.',
        deduction: 'No signature. The handwriting is too distorted by haste to identify clearly. Three people in this house could have written this, and two of them have stronger evidence elsewhere. This is a dead end on its own.'
      },
      {
        id: 'shattered_glass',
        name: 'Shattered Whiskey Glass',
        suspect: null,
        description: 'Edmund\'s glass, broken near his armchair. Could have been knocked over during any one of several arguments reported last evening.',
        deduction: 'The glass could have fallen during an argument hours before the murder, or during the murder itself, or been knocked in the confusion afterward. Without knowing when it broke, this doesn\'t point anywhere.'
      },
      {
        id: 'empty_pill_bottle',
        name: 'Empty Prescription Bottle',
        suspect: null,
        description: "Margaret's name on the label, emptied three days after refill. The pills could have been taken by Margaret, or by someone with access to this room.",
        deduction: 'The label is Margaret\'s, but the bottle is in the common room. Anyone in this house could have taken these. Without knowing where the pills went, this is circumstantial at best.'
      }
    ]
  },

  kitchen: {
    id: 'kitchen',
    name: 'Kitchen',
    floor: 1,
    description: 'A large kitchen. A burner was left on low, the counter is still damp, and something was prepared here recently.',
    clues: [
      {
        id: 'drugged_mug',
        name: 'Mug with Residue',
        suspect: null,
        description: 'A used mug with residue inconsistent with tea or coffee. Someone prepared a doctored drink. Who prepared it and who received it are separate questions.',
        deduction: 'Someone added something to a drink — that much is clear. But who prepared it for whom? Without knowing whose mug this is or who handed it to Edmund, this implicates every adult in the house equally.'
      },
      {
        id: 'cleaned_knife',
        name: 'Cleaned Kitchen Knife',
        suspect: null,
        description: 'A kitchen knife recently and hastily cleaned. Traces remain under the handle. Every adult in this house uses this kitchen.',
        deduction: 'The knife was cleaned in a hurry — that\'s suspicious. But this is a shared kitchen. Without prints or a specific connection to one person, this points in too many directions to be useful alone.'
      },
      {
        id: 'grocery_receipt',
        name: 'Grocery Receipt',
        suspect: null,
        description: 'Valerian root extract listed twice on a receipt from two days ago. A natural sedative. Any of the adults in this house could have bought these.',
        deduction: 'Someone bought sedative herbs two days before a death. That\'s notable. But the receipt doesn\'t have a name on it, and anyone could have gone to that shop. This is a thread, not a conclusion.'
      },
      {
        id: 'roses_medication_list',
        name: "Rose's Altered Medication List",
        suspect: null,
        description: "A handwritten list of Rose's prescriptions on the fridge. The dosage for one sedative has been crossed out and rewritten higher — in different handwriting. Who altered it, and why, is unclear.",
        deduction: 'Someone changed Rose\'s dosage chart. That\'s a significant act. But the question is whether it was to drug Edmund through Rose\'s medication, or to sedate Rose herself. The motive for either could belong to several people here.'
      },
      {
        id: 'crumpled_note',
        name: 'Crumpled Note',
        suspect: null,
        description: '"Don\'t trust him." No signature, retrieved from the bin. The handwriting is difficult to assign to any one family member.',
        deduction: 'Three words. At least three people in this house might have written them, about at least two different men. Without a name or a context, this is just a warning left by someone who was afraid.'
      }
    ]
  },

  dining_room: {
    id: 'dining_room',
    name: 'Dining Room',
    floor: 1,
    description: 'A long mahogany table, still set from last evening\'s dinner. One place setting untouched. One chair overturned.',
    clues: [
      {
        id: 'torn_paper_corner',
        name: 'Torn Paper Corner',
        suspect: 'vivienne',
        description: 'A scrap from under the table. Partial text: "...will be amended before the end of the—" The paper stock exactly matches the will draft found upstairs in Vivienne\'s room.',
        deduction: 'This scrap came off the will draft in Vivienne\'s bedroom — same paper, same typeface, same tear pattern. It was at this table during dinner. Vivienne brought the will to dinner. She was confronting Edmund with it.'
      },
      {
        id: 'wine_glass_lipstick',
        name: 'Wine Glass with Lipstick',
        suspect: null,
        description: "A glass at the wrong end of the table with lipstick that doesn't match any of the women's usual shades. Could belong to any of them on an unusual evening.",
        deduction: 'Unfamiliar lipstick at the wrong seat. It could be Margaret in a different shade, Vivienne, Rose, or someone whose presence at dinner hasn\'t been established. Without a match, this goes nowhere definitive.'
      },
      {
        id: 'overturned_chair',
        name: 'Overturned Chair',
        suspect: null,
        description: "Edmund's chair at the head of the table, knocked backward hard. He stood up suddenly in reaction to something. It tells us he was frightened or enraged — not who caused it.",
        deduction: 'Edmund reacted violently to something. But there were six people at this table. Any one of them could have said or done what triggered it. The chair tells us when Edmund\'s composure broke — not who broke it.'
      },
      {
        id: 'untouched_place_setting',
        name: 'Untouched Place Setting',
        suspect: null,
        description: "Rose's plate, untouched, napkin still folded. She was at dinner but ate nothing. Could be her condition, her medication, or something else entirely.",
        deduction: 'Rose didn\'t eat. Her account mentions the medication makes her confused. She could have been dissociated, anticipating something, or simply unwell. Without more, this is consistent with several explanations.'
      },
      {
        id: 'foreign_cufflink',
        name: "Unknown Cufflink",
        suspect: null,
        description: 'A silver cufflink under the sideboard. Monogrammed "A.C." — not Edmund\'s initials, not matching any family member. Someone else was in this room.',
        deduction: '"A.C." Not a family name. Someone outside this household sat at this table or stood near it. You should find out who those initials belong to before you close any report. This is the one clue that points outside the family entirely.'
      }
    ]
  },

  storage_closet: {
    id: 'storage_closet',
    name: 'Storage Closet',
    floor: 1,
    hasKey: true,
    description: 'A narrow utility closet off the hallway. Old boxes, a faint smell of soil. Something was moved recently.',
    clues: [
      {
        id: 'affair_letters',
        name: "Edmund's Hidden Letters",
        suspect: 'margaret',
        description: "A box of letters from someone outside the family, spanning three years, kept hidden here. The pages are worn at the edges — someone has read through every one of them. Edmund didn't read these again and again.",
        deduction: 'Edmund kept these. He wouldn\'t re-read his own affair letters. But Margaret would — obsessively, late at night, confirming what she already knew. These pages are worn from her hands, not his. She\'s known for years and said nothing. Until now.'
      },
      {
        id: 'muddy_boot_print',
        name: 'Muddy Boot Print',
        suspect: 'danny',
        description: 'A single boot print tracking in from outside, still damp. The size matches only one person in this household: Danny. He was outside in the garden or on the drive last night.',
        deduction: 'The mud is garden soil. The size is Danny\'s — too large for the women, too wide for Oliver\'s slim build. Danny was outside last night and came back in through this entrance. He says he never left the house.'
      },
      {
        id: 'hastily_stored_rug',
        name: 'Rolled-Up Rug',
        suspect: null,
        description: 'A rug from the study, shoved in here in a hurry. Something was cleaned from it. The study is accessible to every adult in the house.',
        deduction: 'The rug was moved in a hurry and something was removed from it. But who had motive to be in the study and access to this closet? That\'s most of the household. Without a more specific connection, this could point to anyone.'
      },
      {
        id: 'torn_childs_drawing',
        name: "Torn Child's Drawing",
        suspect: null,
        description: '"Daddy" — torn in half and taped back together. Old. Kept in a closet. This speaks to the family\'s history, not last night\'s crime.',
        deduction: 'Someone destroyed this and then preserved it. That tells you something about the emotional landscape of this family. It doesn\'t tell you who committed a murder decades later. Old grief isn\'t evidence.'
      }
    ]
  },

  bathroom_1: {
    id: 'bathroom_1',
    name: 'Downstairs Bathroom',
    floor: 1,
    description: 'A small bathroom off the main hall. The sink was recently used — water spots on the mirror, a damp towel.',
    clues: [
      {
        id: 'blood_in_sink',
        name: 'Blood Traces in Sink',
        suspect: 'oliver',
        description: 'The sink was cleaned but not well. The drain holds traces of blood inconsistent with a minor wound. Oliver has a bandaged cut on his palm — he says it\'s from the kitchen. The amount in this drain is not from a kitchen accident.',
        deduction: 'Oliver\'s room is directly above. He has a fresh wound he can\'t satisfactorily explain. The blood in this drain matches the volume of his injury. He washed off more than was visible and did it here, at the back of the house, away from the kitchen where he claims the cut happened.'
      },
      {
        id: 'olivers_razor',
        name: "Oliver's Razor",
        suspect: 'oliver',
        description: "Oliver's shaving razor on the counter. The blade carries dried blood far in excess of what shaving produces. The cut on Oliver's palm is on the wrong side of the hand for a shaving injury.",
        deduction: 'A shaving cut is on the back of the hand or the face. Oliver\'s wound is on the palm — a defensive injury, or from grabbing something sharp. This razor was used for something else, or the blood on it came from contact with his wound. Either way, his explanation doesn\'t hold.'
      },
      {
        id: 'depleted_sleeping_pills',
        name: 'Nearly Empty Pill Bottle',
        suspect: 'rose',
        description: "Rose's sleeping pills. Prescribed two weeks ago, 28 tablets. Four remain. One tablet per night is the standard dose — she should have 14 left. The missing pills did not go into Rose.",
        deduction: 'Rose\'s dose is one per night. She has 4 left after 14 days — she should have 14. Ten pills are unaccounted for. They weren\'t prescribed elsewhere. Rose has been removing them from her own supply and putting them somewhere, or giving them to someone who asked for them without asking why.'
      },
      {
        id: 'stained_towel',
        name: 'Stained Hand Towel',
        suspect: 'danny',
        description: 'A hand towel with a dark stain that was rubbed at — not blotted, rubbed. Both sides used. Someone wiped both hands urgently and rehung it rather than disposing of it.',
        deduction: 'The stain was rubbed from both hands in a panic. Whoever did this was thinking fast enough to rehang the towel — hide it in plain sight rather than throw it away. That kind of calculation under pressure matches someone who has thought about consequences before. Danny has a record of exactly that.'
      }
    ]
  },

  master_bedroom: {
    id: 'master_bedroom',
    name: 'Master Bedroom',
    floor: 2,
    description: 'Edmund and Margaret\'s room. Immaculate on one side, cluttered on the other. The bed was slept in — partially.',
    clues: [
      {
        id: 'margarets_journal',
        name: "Margaret's Journal",
        suspect: 'margaret',
        description: 'The most recent entry, dated the night before: "He came home smelling like her again. I am so tired of pretending. Something has to change — and this time I mean it." The handwriting grows unsteady at the end.',
        deduction: '"This time I mean it." Not the first time she\'s written something like this — you can see older, lighter entries in the same vein. But the phrase changed this time. Not "something needs to change." Something has to. She had decided.',
        isKeyEvidence: true,
        keyFor: 'margaret'
      },
      {
        id: 'sleep_mask_earplugs',
        name: 'Sleep Mask and Earplugs',
        suspect: 'margaret',
        description: "On Margaret's side of the bed, arranged neatly — not tossed there carelessly. She prepared in advance not to hear anything that happened in this house last night.",
        deduction: 'People don\'t lay out a sleep mask and earplugs deliberately unless they plan to use them. Margaret arranged these before she got into bed — she knew she would want to hear nothing. You don\'t prepare for silence unless you know noise is coming.'
      },
      {
        id: 'cracked_phone',
        name: "Edmund's Cracked Phone",
        suspect: null,
        description: 'Last message: "We need to talk tomorrow. Come alone." Sent at 11:42 PM. Recipient saved only as initials. This tells us Edmund expected someone — not who killed him.',
        deduction: 'Edmund summoned someone and asked them to come alone. The initials in the contact are two letters that don\'t match anyone in the household. This matters — but it points outside the family. Without knowing who those initials belong to, this evidence leads nowhere definitive right now.'
      },
      {
        id: 'affair_photo',
        name: 'Hidden Photograph',
        suspect: null,
        description: "Edmund and an unknown woman, tucked in his sock drawer. Years of this. It establishes the affair — not who murdered him.",
        deduction: 'This confirms Edmund was unfaithful. It\'s relevant to motive, but it doesn\'t identify a killer. Margaret clearly knew — her journal makes that plain. But that\'s already accounted for elsewhere. This photo adds context, not evidence.'
      },
      {
        id: 'forced_drawer',
        name: 'Forced Drawer',
        suspect: null,
        description: 'A locked bedside drawer forced open, emptied. Someone knew what was inside. Given who lives in this house, that doesn\'t narrow the field.',
        deduction: 'Someone came for something specific. But every adult in this house has had access to this room at some point. Without knowing what was in the drawer, or finding what was taken, this just confirms a search occurred.'
      }
    ]
  },

  olivers_bedroom: {
    id: 'olivers_bedroom',
    name: "Oliver's Bedroom",
    floor: 2,
    description: 'Months of occupation visible in the disorder. Empty bottles, clothes on the floor, the smell of stale cigarettes.',
    clues: [
      {
        id: 'betting_slip',
        name: 'Betting Slip',
        suspect: 'oliver',
        description: 'A receipt for $8,400 owed to a private creditor, stamped OVERDUE. On the back, in Oliver\'s handwriting: "Last resort — Dad." Edmund\'s answer, in the note found here, was no.',
        deduction: 'Eight thousand four hundred dollars with nowhere left to turn. Oliver wrote "last resort" and Edmund said no in writing. That note closed the last door Oliver had. There is a specific quality to desperation when every legitimate option is exhausted.',
        isKeyEvidence: true,
        keyFor: 'oliver'
      },
      {
        id: 'bloodstained_shirt',
        name: 'Bloodstained Shirt',
        suspect: 'oliver',
        description: 'Shoved under the mattress, not the laundry basket. The stain covers most of the front — too large and too dark to come from a minor wound. Oliver has a bandaged cut on his palm he says is from cooking.',
        deduction: 'He made a choice. Not the laundry, not the bin — under the mattress. That\'s not panic, that\'s thinking. He hid this deliberately, which means he was composing himself while still in this room. The blood on the front is contact blood. He was very close to the source.'
      },
      {
        id: 'edmunds_note_to_oliver',
        name: "Edmund's Final Note",
        suspect: null,
        description: '"Oliver — this is the last time I will have this conversation with you. Sort your life out or you\'re on your own." Written recently, last word underlined twice. This confirms the conflict — not the killing.',
        deduction: 'Edmund was done with Oliver\'s debts. That\'s a motive. But a note from a father to a son is not murder evidence — it\'s a family argument. Without corroborating physical evidence, this just confirms what Oliver already told you.'
      },
      {
        id: 'olivers_antidepressants',
        name: "Oliver's Prescription",
        suspect: null,
        description: "Antidepressants, three months of treatment. He has been struggling privately under this roof. This explains his emotional state — it doesn't make him a murderer.",
        deduction: 'Oliver has been in treatment and didn\'t tell the family. That\'s painful and it\'s relevant to understanding him — but suffering is not guilt. This is context, not evidence. Don\'t let it color your reading of the physical clues.'
      },
      {
        id: 'hole_in_wall',
        name: 'Patched Hole in Wall',
        suspect: null,
        description: 'A freshly patched section of drywall, poorly done. An older, better patch nearby — he has done this before. He has a temper.',
        deduction: 'Oliver punches walls. He has done it more than once in this room. A temper is not a weapon and a pattern of self-directed violence is not evidence of directed violence at someone else. This tells you about Oliver\'s state of mind, not his actions last night.'
      }
    ]
  },

  viviennes_bedroom: {
    id: 'viviennes_bedroom',
    name: "Vivienne's Bedroom",
    floor: 2,
    description: 'Orderly and deliberate. Books by subject, a corkboard of notes, a packed suitcase by the door.',
    clues: [
      {
        id: 'journalists_card',
        name: "Journalist's Business Card",
        suspect: 'vivienne',
        description: 'A card from a journalist at a national paper. On the back, in the journalist\'s own handwriting: "Call me when it\'s done." Vivienne kept this. She knew what it meant.',
        deduction: '"When it\'s done." The journalist wrote this — but Vivienne kept the card, which means she accepted the framing. Whatever "it" refers to, Vivienne understood herself to be the one who would complete it. She was waiting for the right moment.',
        isKeyEvidence: true,
        keyFor: 'vivienne'
      },
      {
        id: 'draft_will',
        name: 'Draft Will',
        suspect: 'vivienne',
        description: "Edmund's updated will, partially printed. Vivienne's name crossed out twice in red pen. She had a copy — she knew exactly what was coming and when.",
        deduction: 'She had a copy of the will amendment. Edmund didn\'t give it to her — she obtained it. She knew she was being cut out, she knew the timeline, and she kept the document. Not to mourn it. To study it.'
      },
      {
        id: 'packed_suitcase',
        name: 'Packed Suitcase',
        suspect: 'vivienne',
        description: 'Fully packed, latched, passport on top, placed at the door. She was ready to leave at a moment\'s notice — the question is whether she packed before last night, anticipating freedom, or after, anticipating consequences.',
        deduction: 'The suitcase is packed with purpose — this isn\'t a weekend bag. Passport accessible. She could walk out the door in under a minute. She packed either before the murder, knowing she\'d be free soon, or after it, knowing she\'d have to run. Both interpretations are damning.'
      },
      {
        id: 'edmunds_threat_email',
        name: "Edmund's Threat Email",
        suspect: null,
        description: '"You have no idea what you\'ve started. I will bury you before I let you bury me." Edmund threatened Vivienne. This tells us Edmund was afraid. It doesn\'t tell us who killed him.',
        deduction: 'Edmund threatening his daughter in writing tells you how cornered he felt. But a threatened man pointing at someone isn\'t the same as that someone being guilty. Vivienne has stronger evidence elsewhere — this email is context, not proof.'
      },
      {
        id: 'inheritance_law_book',
        name: 'Inheritance Law Book',
        suspect: null,
        description: 'A library book on contesting wills, annotated carefully in Vivienne\'s hand. She was building a legal strategy to fight the amendment.',
        deduction: 'Vivienne was preparing to contest the will through legal channels. That\'s someone who expects to survive long enough for a court case — not someone who has decided on a more immediate solution. This actually cuts against her motive.'
      }
    ]
  },

  bathroom_2: {
    id: 'bathroom_2',
    name: 'Upstairs Bathroom',
    floor: 2,
    description: 'The shared family bathroom. The floor tiles are still damp. Something was cleaned here recently.',
    clues: [
      {
        id: 'bloody_nightgown',
        name: 'Bloodstained Nightgown',
        suspect: 'rose',
        description: "Folded under the cabinet beneath the sink, still damp. Small — Rose's size. The blood covers the front and the right sleeve. Contact blood — she was close to the source, and her right arm was extended toward it.",
        deduction: 'Rose\'s size. Hidden under the sink, still damp — hidden in the last few hours. The blood on the sleeve is from her arm reaching toward or into a wound. She wasn\'t a bystander. Her right arm was in contact with the source of this blood.',
        isKeyEvidence: true,
        keyFor: 'rose'
      },
      {
        id: 'roses_folded_wheelchair',
        name: "Rose's Folded Wheelchair",
        suspect: 'rose',
        description: "Rose's wheelchair, cold and dry, folded behind the door. She claims she cannot stand unassisted. The chair has not been used today — or last night.",
        deduction: 'Cold and dry means it wasn\'t used this morning and wasn\'t folded away after use — it was folded before, or put here deliberately. Rose claims she can\'t stand without it. But a wheelchair that isn\'t used isn\'t evidence she can\'t walk. It\'s evidence she chose not to use it.'
      },
      {
        id: 'low_nail_marks',
        name: 'Scratch Marks on Door Frame',
        suspect: 'rose',
        description: "Nail marks in the paint at standing height — frantic, gripping. Too high for a wheelchair user reaching up. Someone frail and unsteady walked this hall on their own feet.",
        deduction: 'She gripped this frame standing upright. The marks are at shoulder height, not arm-extended height. She was pulling herself along the wall — mobile but struggling. Rose can walk. She has been concealing that capability from everyone in this house.'
      },
      {
        id: 'glass_with_residue',
        name: 'Glass with Residue',
        suspect: null,
        description: 'A half-drunk glass of water on the tub edge. Something was dissolved in it — the residue pattern is wrong for standard pills. The bathroom is shared.',
        deduction: 'Something was prepared in this glass — not standard medication. But the bathroom is used by everyone on this floor. Without knowing whose glass this is or who prepared it, this connects to too many threads to follow as standalone evidence.'
      }
    ]
  },

  supply_closet: {
    id: 'supply_closet',
    name: 'Upstairs Supply Closet',
    floor: 2,
    description: 'Towels, cleaning supplies, a mop still wet from recent use. Sharp smell of bleach.',
    clues: [
      {
        id: 'cut_zip_tie',
        name: 'Cut Zip Tie',
        suspect: 'danny',
        description: 'A plastic zip tie on the floor, cut clean through. The kind used to bind wrists. There is no household explanation for this being here.',
        deduction: 'There is no innocent reason for a cut zip tie in a linen closet. It was used to restrain something — or someone — and then cut. Danny was in this closet. Danny\'s wallet is here. Danny has no explanation for either.',
        isKeyEvidence: true,
        keyFor: 'danny'
      },
      {
        id: 'dannys_wallet',
        name: "Danny's Wallet",
        suspect: 'danny',
        description: "Danny's wallet behind a stack of towels, ID inside. He didn't lose this — you don't misplace a wallet here. He left it in a hurry, or he was here for something he didn't want traced.",
        deduction: 'His ID is still inside. He didn\'t notice it was gone, or he noticed and chose not to say anything — both options are bad for him. He was in this closet when he shouldn\'t have been, and he left something behind that places him here definitively.'
      },
      {
        id: 'wet_mop',
        name: 'Recently Used Mop',
        suspect: null,
        description: 'Soaking wet, the bucket water cloudy and faintly pink. Something significant was cleaned. The closet is accessible to every adult on this floor.',
        deduction: 'Someone cleaned a floor — not tiles, given the pink tint. But this closet is accessible to everyone upstairs. Without a more specific trail, the mop confirms a cleanup without confirming who did it.'
      },
      {
        id: 'altered_cleaning_log',
        name: 'Altered Cleaning Log',
        suspect: null,
        description: "A cleaning notebook with yesterday's entry crossed out and rewritten in different handwriting. The original, still legible: \"...study floor.\" Someone didn't want that in writing.",
        deduction: 'Two people touched this log. The original entry was about the study floor — which ties back to the moved rug downstairs. But who altered it? The handwriting change is clear; the identity isn\'t. This is a thread connected to other evidence, not a standalone conclusion.'
      }
    ]
  },

  attic: {
    id: 'attic',
    name: 'The Attic',
    floor: 3,
    description: 'Reached through a hatch with a rusted ladder. Dust, old furniture under sheets. Something was left here that was never meant to be found.',
    clues: [
      {
        id: 'buried_case_file',
        name: 'Buried Case File',
        suspect: null,
        isTruthEvidence: true,
        description: "A folder with Edmund's name and a case number from 14 years ago. A full investigation into bribery and fraud, stamped CLOSED. In pencil underneath: \"not done.\"",
        deduction: '"Not done." Written after the official closure, in the same hand as the marginal notes throughout. Someone kept this file active off the books. The phrase is a promise made to no one but themselves.'
      },
      {
        id: 'croft_letter',
        name: "Croft's Personal Letter",
        suspect: null,
        isTruthEvidence: true,
        description: "Unsent, in Croft's handwriting, addressed to Edmund: \"You know what you cost me. You know what you cost Thomas. One day this catches up to you. I will make sure of it.\" Dated eight years ago.",
        deduction: 'Croft wrote this eight years ago and never sent it. He kept it. He\'s been coming to this house, and he knew this attic. He knew this family far better than his official account admits. Eight years of waiting, and then he put himself on the case.'
      },
      {
        id: 'shadow_dossier',
        name: "Croft's Private Dossier",
        suspect: null,
        isTruthEvidence: true,
        isKeyEvidence: true,
        keyFor: 'croft',
        description: "Years of off-the-books surveillance on Edmund — financials, movements, contacts. No case number, no chain of custody, no official sanction. The obsessive record of someone who never let go.",
        deduction: 'This is not a professional file. There is no case number. No supervisor signed off on any of this. Croft built this on his own time, in secret, for years. He never stopped watching Edmund. And then Edmund turned up dead with Croft running the investigation.'
      },
      {
        id: 'edmunds_ledger',
        name: "Edmund's Private Ledger",
        suspect: null,
        isTruthEvidence: true,
        description: "Edmund's own record of favors, bribes, and cover-ups. Croft appears twice — once as a recipient, once circled in red with the word \"threat.\" Edmund knew Croft was coming.",
        deduction: 'Edmund paid Croft off once — years ago. Then Croft turned and Edmund marked him as a threat. Two men circling each other for over a decade, each building a file on the other. One of them is in this attic. The other is dead downstairs.'
      },
      {
        id: 'newspaper_clipping',
        name: 'Newspaper Clipping',
        suspect: null,
        isTruthEvidence: true,
        description: "An obituary for Thomas Vey — accountant, no family, died by suicide after financial ruin. In the margin, in Croft's handwriting: \"Edmund did this.\"",
        deduction: 'Thomas Vey. Croft has been carrying this clipping. The handwriting is his, the fold lines are worn from years in a pocket or a wallet. This is not a case. This is grief. This is what everything has been about from the beginning — not justice, a name.'
      }
    ]
  }
};

const ENDINGS = {
  margaret: {
    id: 'margaret',
    suspectId: 'margaret',
    title: "The Detective's Report — Day {day}",
    accusation: "Margaret Hargrove",
    narrative: `The evidence points to Margaret. Years of quiet suffering — the affair, the control, the slow erasure of who she was — finally had a breaking point. She had the access, she had the motive, and she had made a decision. You file your report. Croft approves it within the hour. Unusually fast.`,
    keyEvidence: 'margarets_journal',
    keyEvidenceLabel: "Margaret's Journal — 'this time I mean it'"
  },
  oliver: {
    id: 'oliver',
    suspectId: 'oliver',
    title: "The Detective's Report — Day {day}",
    accusation: "Oliver Hargrove",
    narrative: `The evidence points to Oliver. The debt was crushing him. His father had closed the last door. Whatever happened that night — an argument that crossed a line, a moment that can't be walked back — the physical evidence is damning. You file your report. Croft approves it before you've left the building.`,
    keyEvidence: 'betting_slip',
    keyEvidenceLabel: "Oliver's betting slip — 'last resort — Dad'"
  },
  vivienne: {
    id: 'vivienne',
    suspectId: 'vivienne',
    title: "The Detective's Report — Day {day}",
    accusation: "Vivienne Hargrove",
    narrative: `The evidence points to Vivienne. She had already gone to the press. Her father was about to strip her inheritance. The journalist's card, the draft will, the packed suitcase — she was ready for what came next. You file your report. Croft calls it airtight.`,
    keyEvidence: 'journalists_card',
    keyEvidenceLabel: "Journalist's card — 'call me when it's done'"
  },
  danny: {
    id: 'danny',
    suspectId: 'danny',
    title: "The Detective's Report — Day {day}",
    accusation: "Danny Hargrove",
    narrative: `The evidence points to Danny. Two weeks under Edmund's roof waiting for money that kept not coming. Old resentments have long roots. The physical evidence places him in places he can't explain, doing things he won't account for. You file your report. Croft nods. "Knew it," he says.`,
    keyEvidence: 'cut_zip_tie',
    keyEvidenceLabel: "Cut zip tie — found in supply closet"
  },
  rose: {
    id: 'rose',
    suspectId: 'rose',
    title: "The Detective's Report — Day {day}",
    accusation: "Rose Hargrove",
    narrative: `The evidence points to Rose. She is not as helpless as she appears — not even close. A woman who built the Hargrove fortune from nothing, watching her son corrupt it for thirty years. Her condition makes her a complicated defendant. Croft signs off and quietly suggests care over charges. Convenient.`,
    keyEvidence: 'bloody_nightgown',
    keyEvidenceLabel: "Rose's bloodstained nightgown"
  },
  croft: {
    id: 'croft',
    suspectId: 'croft',
    title: "The Truth",
    accusation: "Inspector Aldous Croft",
    narrative: `You lay the evidence out on your desk. Five days. Five reports. Five people you accused — and every time, Croft approved your conclusions without a single question. Too fast. Too easy. He needed each of them to look guilty.\n\nThe attic tells a different story. Croft had been building a case against Edmund for fourteen years — off the books, in secret, with the patience of someone who never forgave. Edmund buried Croft's investigation, destroyed a man named Thomas Vey in the process, and walked free. Croft stopped trying to beat him through the law.\n\nHe put himself on this case. He controlled what you found. He pointed you at the family and waited for you to do his work.\n\nYou reach for the phone.\n\nYou don't make it.`
  }
};

// Dialogue spoken at the desk as the detective pieces together the pattern
const OFFICE_PIECES = {
  margaret: {
    label: "Margaret's Journal — 'this time I mean it'",
    piece: `Margaret's journal. She had motive, she had rage — and I believed it. Croft approved the report within the hour. I remember thinking that was efficient. Now I think: he didn't read it. He already knew what answer he wanted.`
  },
  oliver: {
    label: "Oliver's betting slip — 'last resort — Dad'",
    piece: `Oliver's debt. His father cut him off. On paper it looks like everything. Croft signed off before I'd left the building. That's twice now. Two different suspects. Two reports. Both closed immediately. No follow-up questions. None.`
  },
  vivienne: {
    label: "Journalist's card — 'call me when it's done'",
    piece: `"Call me when it's done." We took that as Vivienne signaling a kill. But she's a source — a whistleblower. Done could mean the story was ready. Croft called this one airtight. He keeps using that word. Airtight means he's not looking for holes.`
  },
  danny: {
    label: "Cut zip tie — found in supply closet",
    piece: `Danny in the wrong place with no explanation. Croft said "knew it" when I handed him the report. Knew it — like he already had a list of acceptable answers and was just waiting for me to land on one. That's not how a detective talks. That's how someone talks when they're relieved.`
  },
  rose: {
    label: "Rose's bloodstained nightgown",
    piece: `Five people. Five reports. Five times Croft approved without a single question. He assigned himself to this case. He controlled what I found, which rooms I was pointed toward, which leads felt right. The family was never the target. They were the cover. And I kept walking into exactly the rooms he wanted me to find.`
  }
};

const ATTIC_KEY = {
  id: 'attic_key',
  name: 'Attic Key',
  description: 'A heavy iron key on a plain ring. A faded label: "Hatch — 3rd."'
};
